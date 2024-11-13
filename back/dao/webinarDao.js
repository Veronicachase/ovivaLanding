const db = require("../dataBase/db");
const moment = require("moment");
const { removeUndefinedKeys } = require("../middlewares/removeUndefinedKeys");
const webinarDao= {};

webinarDao.addWebinarData = async (webinarData) => {
  console.log("Received webinarData:", webinarData);
  let conn = null;
  try {
    conn = await db.createConnection();
    let webinarObj  = {
      registration_date: moment().format("YYYY-MM-DD"),
      email:webinarData.email,
      name:webinarData.name,
      lastName:webinarData.lastName,
      age:webinarData.age,
      mainStruggle:webinarData.mainStruggle
  
    };
    console.log("Constructed webinarObj:", webinarObj);
    webinarObj = await removeUndefinedKeys(webinarObj);
    const result = await db.query("INSERT INTO webinar_registration SET ?", webinarObj  , "insert", conn);
    return result.insertId;
  } catch (e) {
    console.error(e.message);
    throw e;
  } finally {
    if (conn) conn.release();
  }
};



webinarDao.getWebinarDate = async (activityDate) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let result = await db.query(
      "SELECT activityDate FROM webinardate ORDER BY activityDate DESC LIMIT 1",
      [activityDate],  
      "select",
      conn
    );
    return result[0]
   
  

  } catch (e) {
    console.error(e.message);
    throw e;

  } finally {
   
    if (conn) {
      conn.release();
    }
  }
};



module.exports = webinarDao;
