import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import '../styles/password.css'

function PasswordInput({password, setPassword})
{
    const [showPassword, SetShowPassword] = useState(false);

    const tooglePasswordVisible = () =>{
        SetShowPassword(!showPassword);
    };

    return (
      <div className="password-input-container">
        <input
          className="password-input"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className="password-toogle-icon" onClick={tooglePasswordVisible}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
        </span>
      </div>
    );
}
export default PasswordInput;