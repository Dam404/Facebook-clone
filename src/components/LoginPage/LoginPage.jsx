import React from "react";
import "./login.css";
import PasswordInput from "../../Password/Password";

function LoginPage() {
  return (
    <>
      <div className="Login">
        <div className="facebook">
          <div className="facebook-title">facebook</div>
          <div className="facebook-text">
            Facebook helps you connect and share<br></br> with the people in
            your life.
          </div>
        </div>
        <div className="login-container">
          <input
            type="email"
            placeholder="Email address or phone number"
          ></input>
          <br></br>
          <PasswordInput />
          <br></br>
          <button className="login">Log in</button>
          <div className="forgetten">
            <a href="/">Forgotten Password?</a>
          </div>
          <div className="line"></div>
          <br></br>
          <button className="create">Create A New Account</button>
          <br></br>
          <br></br>
          <div className="page">
            <a href="/">
              <b>Create a Page </b>
            </a>{" "}
            for a celebrity, brands or business.
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
