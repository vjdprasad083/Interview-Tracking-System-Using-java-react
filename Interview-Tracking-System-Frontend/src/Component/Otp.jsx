import React, { useRef, useState } from "react";

function OtpForm({
  errorMessages,
  handleEmailSending,
  isChange,
  handleChange,
}) {
  const [message, setMessage] = useState(" We have sent an OTP to your email");

  const inputRef = useRef(null);
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleResendEmail = (event) => {
    event.preventDefault();
    handleEmailSending();
    handleChange();
    setMessage(" We have Resent an OTP to your email");
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="input-container">
        <label>Enter OTP </label>
        <div className="otpMessage-container">{message}</div>
        <input
          type="text"
          name="otp"
          required
          ref={inputRef}
          onChange={handleChange}/>
        {isChange ? renderErrorMessage("otp") : null}
      </div>
      <br></br>
      <div className="input-container">
        <div className="resendMessage-container">
          Didn't receive OTP?
          <a href="" onClick={handleResendEmail}>
            Resend OTP
          </a>
        </div>
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </>
  );
}

export default OtpForm;
