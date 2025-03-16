"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (data) => {
  const { error } = await resend.emails.send({
    from: process.env.RESEND_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `An Email From "${data.name}" - Portfolio`,
    html: `<h1>A Message Thorugh the Portfolio Contact Form </h1><h3>From: ${data.name} - ${data.email}</h3> <h4>Message:</h4><p>${data.message}</p>`,
  });
  if (error) {
    console.log(error);
    return { messageSent: true, error: true };
  } else {
    return { messageSent: true, error: false };
  }
};
