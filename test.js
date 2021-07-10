const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config({
    path: __dirname + "/.env",
  });

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};
const transporter = nodemailer.createTransport(mailGun(auth));

const name = "Thanasorn"
const email = "6010210107@psu.ac.th"

const testMail = {
    from: `${name} <${email}>`,
  to: "win132041@gmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomness!",
};

transporter.sendMail(testMail, (err, data) => {
  console.log(data);
  console.log(err);
  if(err) return console.log(err)
  console.log("Success")
});
