import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../Stylings/Login.css';

function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const history= useNavigate();


  const database = [
    {
      username: "Admin",
      password: "pass1",
      role:"Admin"
    },
    {
      username: "Tech",
      password: "pass2",
      role:"Tech"
    },
    {
      username: "Hr",
      password: "pass3",
      role:"Hr"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];


    const userData = database.find((user) => user.username === uname.value);


    if (userData) {
      if (userData.password !== pass.value) {

        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        if(userData.role==="Admin"){
          sessionStorage.setItem('role','Admin')
          setIsSubmitted(true);
          history('/AdminHeader');
        }
        else if(userData.role==="Tech"){
          sessionStorage.setItem('role','Tech')
          history('/TechHeader');
        }
        else{
          sessionStorage.setItem('role','Hr')
          history('/HrHeader');
        }
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


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