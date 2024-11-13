const express = require("express");
const { addWebinarData, getWebinarDate} = require("../controller/webinarController");
const { webinarSubscriber } = require("../apis/mailerLite")
const WebinarRouter = express.Router(); 

WebinarRouter.post("/", addWebinarData); 
WebinarRouter.get("/webinar-date", getWebinarDate); 
WebinarRouter.post("/webinar-subscribe", webinarSubscriber);

module.exports = WebinarRouter;

