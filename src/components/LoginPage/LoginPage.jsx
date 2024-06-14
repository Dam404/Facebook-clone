import React, { useState } from 'react';
import "./login.css";
import {auth} from '../../firebase';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
      e.preventDefault();
      try{
        await auth.signWithEmailAndPassword(email, password);
      }
      catch (error){
          setError(error.message)
      }
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
        <div className="login-container" value={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address or phone number"
            required
          ></input>
          <br></br>
           <input
            type="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          ></input>
          <br></br>
          <button className="login">Log in</button>
          <div className="forgetten">
            <a href="/">Forgotten Password?</a>
          </div>
          <div className="line"></div>
          <br></br>
          <div>
          <button className="create">Create A New Account</button>
          {error && <p>{error}</p>}
          </div>
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
}
export default LoginPage;
