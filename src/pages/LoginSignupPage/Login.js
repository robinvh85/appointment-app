import React, { useState } from 'react';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import './SignupLoginStyle.css';


export default function Login() {
    const [aLogin, setALogin] = useState(false);
    const [uLogin, setULogin] = useState(true);

    const switcher = (word) => {
        var aLogin, uLogin;
        if (word == "Admin") {
            aLogin = true;
            uLogin = false;
        }
        else {
            uLogin = true;
            aLogin = false;
        }
        setALogin(aLogin);
        setULogin(uLogin);
    }

    return (
        <div id="login-main-div">
            <div id="login-lable-div">
                <div id="a-login-tab" onClick={() => switcher("Admin")} className={aLogin ? "login-tab-active" : "login-tab-inactive"}>Admin</div>
                <div id="u-login-tab" onClick={() => switcher("User")} className={uLogin ? "login-tab-active" : "login-tab-inactive"}> User</div>
            </div>
            {aLogin ? <AdminLogin /> : null}
            {uLogin ? <UserLogin /> : null}
        </div>
    )
}