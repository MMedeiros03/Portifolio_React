/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import emailjs from "@emailjs/browser";
import { message } from "antd";

export const SendEmail = async (values) => {
  const mailOptions = {
    email: values?.email,
    name: values?.name,
    subject: values?.subject,
    message: values.message
  };

  await emailjs
    .send(
      "service_esv3hmf",
      "template_8whrmkf",
      mailOptions,
      "5UwYc0rmhfD1soXDm"
    )
    .then((res) => {
      console.log(res);
      message.success("Email successfully sent");
    })
    .catch((err) => {
      message.error("Error sending email. Try again later.");
      console.log(err);
    });
};
