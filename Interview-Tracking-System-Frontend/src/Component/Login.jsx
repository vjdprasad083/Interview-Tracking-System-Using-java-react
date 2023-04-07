import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import '../Stylings/Login.css';
import PanelMemberService from "../Service/PanelMemberService";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [panelMember, setPanelMember] = useState({
    panelMemberId: '',
    password: '',
    employee: '',
    panelMemberType: '',
    location: ''
  });

  const history = useNavigate();

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const uname = event.target.uname.value;
    const pass = event.target.pass.value;

    try {
      const panel = await PanelMemberService.getPanelMemberById(uname);
      setPanelMember(panel.data);

      if (panel.data.password !== pass) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        if (panel.data.panelMemberType === "Admin") {
          sessionStorage.setItem('role', 'Admin')
          setIsSubmitted(true);
          history('/AdminHeader');
        } else if (panel.data.panelMemberType === "Tech") {
          sessionStorage.setItem('role',panel.data.panelMemberType)
          sessionStorage.setItem('id',panel.data.panelMemberId)
          history('/TechHeader');
        } else {
          sessionStorage.setItem('role',panel.data.panelMemberType)
          sessionStorage.setItem('id',panel.data.panelMemberId)
          history('/HrHeader');
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  useEffect(() => {
    const getPanelMember = async () => {
      const panel = await PanelMemberService.getPanelMemberById(panelMember.panelMemberId);
      setPanelMember(panel.data);
    };
    if (panelMember.panelMemberId) {
      getPanelMember();
    }
  }, [panelMember.panelMemberId]);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="Login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;