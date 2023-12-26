import emailjs from "emailjs-com";
function SendOtp(props) {
  const otp = Math.floor(1000 + Math.random() * 9000);
  const serviceID = "service_kow1mbu";
  const templateID = "template_sis4v5x";
  const userID = "tSA0GBbAglBzPYkMv";

  emailjs.init(userID);
  const templateParams = {
    email: props,
    subject: "Login Otp",
    otp: otp,
    message: "This is a Login email sent from Interview Tracking System.",
  };

  emailjs
    .send(serviceID, templateID, templateParams)
    .then()
    .catch((error) => console.error("Error sending email:", error));

  return otp;
}
export default SendOtp;
