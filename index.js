import {readFileSync} from "fs";
import {createTransport} from "nodemailer";
import "dotenv/config";

const tutor_subject = "";
const tutor_message = "";
const student_subject = "";
const student_message = "";

const data = JSON.parse(readFileSync('./twb2.json',
            {encoding:'utf8', flag:'r'}));

try {
  let transporter = createTransport({
    host: "p3plzcpnl475181.prod.phx3.secureserver.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });

  // Student emails
  for (let i of data[2].data) {
    let info = await transporter.sendMail({
      from: 'info@educationwithoutboarders.com', // sender address
      to: i.email, // list of receivers
      subject: student_subject, // Subject line
      text: student_message, // plain text body
    });
  }


  // Teacher emails
  for (let i of data[3].data) {
    let info = await transporter.sendMail({
      from: 'info@educationwithoutboarders.com', // sender address
      to: i.email, // list of receivers
      subject: tutor_subject, // Subject line
      text: tutor_message, // plain text body
    });
  }


} catch(err) {
  console.error(err);
}