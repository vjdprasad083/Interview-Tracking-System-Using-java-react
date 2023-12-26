import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../Stylings/Login.css";
import PanelMemberService from "../Service/PanelMemberService";
import SendOtp from "./SendOtp";
import OtpForm from "./Otp";

function Login() {
  const history = useNavigate();

  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isChange, setIsChange] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [panelMember, setPanelMember] = useState({
    panelMemberId: "",
    password: "",
    employee: "",
    panelMemberType: "",
    location: "",
  });

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    otp: "invalid otp",
  };

  const handleChange = () => {
    setIsChange(false);
  };

  const handleEmailSending = () => {
    const generatedOtp = SendOtp(email);
    setOtp(generatedOtp);
    setIsOtpSent(true);
    return generatedOtp;
  };

  useEffect(() => {
    const fetchPanelMember = async () => {
      try {
        const panel = await PanelMemberService.getPanelMemberByEmail(email);
        setPanelMember(panel.data);
        if (panel.data.password !== password) {
          setErrorMessages({ name: "pass", message: errors.pass });
          setIsChange(true);
        } else {
          handleEmailSending();

          if (panel.data.panelMemberType === "Admin") {
            sessionStorage.setItem("role", "Admin");
          } else if (panel.data.panelMemberType === "Tech") {
            sessionStorage.setItem("role", panel.data.panelMemberType);
            sessionStorage.setItem("id", panel.data.panelMemberId);
          } else {
            sessionStorage.setItem("role", panel.data.panelMemberType);
            sessionStorage.setItem("id", panel.data.panelMemberId);
          }
        }
      } catch (error) {
        console.error(error);
        setErrorMessages({ name: "uname", message: errors.uname });
        setIsChange(true);
      }
    };

    if (email) {
      fetchPanelMember();
    }
  }, [email]);

  const handleOtpSubmit = (event) => {
    event.preventDefault();

    const formOtp = event.target.otp.value;

    if (formOtp == otp) {
      if (sessionStorage.getItem("role") == "Admin") {
        // history("/ShowInterviews");
        history("/adminPanel");
      } else if (sessionStorage.getItem("role") == "Hr") {
        history("/HrInterviews");
      } else {
        history("/TechInterviews");
      }
    } else {
      setErrorMessages({ name: "otp", message: errors.otp });
      setIsChange(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const uname = event.target.uname.value;
    // const pass = event.target.pass.value;
    setPassword(event.target.pass.value);
    setEmail(event.target.uname.value);
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="Login">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form onSubmit={!isOtpSent ? handleSubmit : handleOtpSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                name="uname"
                onChange={handleChange}
                required/>
              {isChange ? renderErrorMessage("uname") : null}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                onChange={handleChange}
                required/>
              {isChange ? renderErrorMessage("pass") : null}
            </div>
            {!isOtpSent ? (
              <div className="button-container">
                <input type="submit" value="Send Otp" />
              </div>
            ) : (
              <OtpForm
                errorMessages={errorMessages}
                handleEmailSending={handleEmailSending}
                handleChange={handleChange}
                isChange={isChange}/>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
