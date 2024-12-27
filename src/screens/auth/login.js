import React from "react";
import { loginEndPoint } from "../../spotify";
import './login.css'

function login() {
    return (
        <div className="login-page">
            <a href={loginEndPoint}>
                <div className="login-btn">Log in</div>
            </a>
        </div>
    );
}

export default login;
