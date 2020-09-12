import React, { useState } from 'react';
import Login from './Login';
import SignupEmailForm from './SignUpEmaiForm';
import './SignupLoginStyle.css';
import GlobalVars from '../GlobalVars';
import LoadingIndicator from '../component/LoadingIndicator';


export default function LoginSignupCommon() {
    const [signup, setSignup] = useState(false);
    const [login, setLogin] = useState(true);

    const switcher = (word) => {
        var signup, login;
        if (word == "signup") {
            signup = true;
            login = false;
        }
        else {
            login = true;
            signup = false;
        }
        setSignup(signup);
        setLogin(login);
    }

    return (
        <div>
            <div id="signup-login-main-div">
                <div id="app-name-div">{GlobalVars.GlobalVars.appName}</div>
                <div id="signup-login-lable-div">
                    <div id="signup-tab" onClick={() => switcher("signup")} className={signup ? "signup-login-active" : "signup-login-inactive"}>Sign up</div>
                    <div id="login-tab" onClick={() => switcher("login")} className={login ? "signup-login-active" : "signup-login-inactive"}> Login</div>
                </div>
                {signup ? <SignupEmailForm /> : null}
                {login ? <Login /> : null}
            </div>
            <LoadingIndicator></LoadingIndicator>
        </div>
    )
}