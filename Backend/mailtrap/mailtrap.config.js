// import dotenv from "dotenv"; 
// dotenv.config();
// dotenv.config({ path: "../.env" });

import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAILTRAP_API_TOKEN;

console.log("TOKEN:", TOKEN);
// console.log("ENV CHECK:", process.env);

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

console.log("MAILTRAP TOKEN FINAL:", process.env.MAILTRAP_API_TOKEN);

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};

// const recipients = [
//   {
//     email: "anuj098776@gmail.com",
//   }
// ];

// mailtrapClient
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
