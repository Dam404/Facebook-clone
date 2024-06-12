import React, { useState } from "react";
import "./signup.css";

function Signup() {
  return (
    <div className="Signup">
      <div className="facebook">facebook</div>
      <div className="signup-container">
        <div className="heading">
          <h2 className="heading1">Create a new account</h2>
          <p>It's quick and easy.</p>
        </div>
        <hr className="line"></hr>
        <div className="input-details">
          <input className="firstname" type="name" placeholder="First Name" />
          <input className="surname" type="name" placeholder="Surname" />
        </div>
        <div className="inputcontact">
          <input
            className="email"
            type="email"
            placeholder="Mobile number or email address"
          />
          <input
            className="Password"
            type="Password"
            placeholder="New password"
          />
        </div>
        <br></br>
        <p>Date of birth</p>
        <div className="select-button">
          <select className="day">
            <option className="female">1</option>
            <option clssaName="Male">2</option>
            <option clssaName="Custom">3</option>
            <option className="female">4</option>
            <option clssaName="Male">5</option>
            <option clssaName="Custom">6</option>
            <option className="female">7</option>
            <option clssaName="Male">8</option>
            <option clssaName="Custom">9</option>
            <option className="female">10</option>
            <option clssaName="Male">11</option>
            <option clssaName="Custom">12</option>
            <option className="female">13</option>
            <option clssaName="Male">14</option>
            <option clssaName="Custom">15</option>
            <option className="female">16</option>
            <option clssaName="Male">17</option>
            <option clssaName="Custom">18</option>
            <option className="female">19</option>
            <option clssaName="Male">20</option>
            <option clssaName="Custom">21</option>
            <option className="female">22</option>
            <option clssaName="Male">23</option>
            <option clssaName="Custom">24</option>
            <option className="female">25</option>
            <option clssaName="Male">26</option>
            <option clssaName="Custom">27</option>
            <option className="female">28</option>
            <option clssaName="Male">29</option>
            <option clssaName="Custom">30</option>
            <option className="female">31</option>
          </select>
          <select className="Month">
            <option clssaName="Male">January</option>
            <option clssaName="Custom">Febuary</option>
            <option clssaName="Male">March</option>
            <option clssaName="Custom">April</option>
            <option clssaName="Male">May</option>
            <option clssaName="Custom">June</option>
            <option clssaName="Male">July</option>
            <option clssaName="Custom">August</option>
            <option clssaName="Male">September</option>
            <option clssaName="Custom">October</option>
            <option clssaName="Male">November</option>
            <option clssaName="Custom">December</option>
          </select>
          <select className="Year">
            {" "}
            <option clssaName="Male">1990</option>
            <option clssaName="Custom">1991</option>
            <option clssaName="Male">1992</option>
            <option clssaName="Custom">1993</option>
            <option clssaName="Male">1994</option>
            <option clssaName="Custom">1995</option>
            <option clssaName="Male">1996</option>
            <option clssaName="Custom">1997</option>
            <option clssaName="Male">1998</option>
            <option clssaName="Custom">1999</option>
            <option clssaName="Male">2000</option>
            <option clssaName="Custom">2001</option>
            <option clssaName="Male">2002</option>
            <option clssaName="Custom">2003</option>
            <option clssaName="Male">2004</option>
            <option clssaName="Custom">2005</option>
            <option clssaName="Male">2006</option>
            <option clssaName="Custom">2007</option>
          </select>
        </div>
        <div className="gender">
         <select type="radio">
         </select>
          <option className="female"></option>
          <option clssaName="Male"></option>
          <option clssaName="Custom"></option>
        </div>
        <span className="text">
          <p>
            People who use our service may have uploaded your contact
            information to Facebook.
            <a href="/">Learn more.</a>
          </p>
          <p>
            By clicking Sign Up, you agree to our{" "}
            <a href="/">Terms, Privacy Policy</a> and{" "}
            <a href="/">Cookies Policy.</a> You may receive SMS notifications
            from us and can opt out at any time.
          </p>
        </span>
        <button className="signup" type="submit">
          Sign up
        </button>
        <h6>
          <a href="/">Already have an account?</a>
        </h6>
      </div>
    </div>
  );
}
export default Signup;
