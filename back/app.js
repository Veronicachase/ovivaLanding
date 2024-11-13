const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");

const webinarEmail = require("./router/webinarRouter");


dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const app = express();
const port = process.env.PORT ||4000;

const corsOptions = {
  origin:'*',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.text());
app.use(express.urlencoded({ extended: true }));


app.use("/webinar",  webinarEmail );


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  