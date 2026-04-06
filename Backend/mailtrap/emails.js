import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "../mailtrap/mailtrap.config.js";


export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{email}];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email Address",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
      category: "Email verification",
      
    })

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(`Failed to send verification email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{email}];

  try {
    await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "ee4c76ee-f328-4bf7-a6b8-8a8972c398eb",
      template_variables: {
        company_info_name : "TavCorp",
        name : name,
      },
    });
    console.log("Welcome email sent successfully");
  }catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error(`Failed to send welcome email: ${error.message}`);
  }

};

export const sendResetPasswordEmail = async (email, resetURL) => {
  const recipient = [{email}];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Request",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password reset",
    })
  } catch (error) {
    console.error("Error sending reset password email:", error);
    throw new Error(`Failed to send reset password email: ${error.message}`);
  }
}