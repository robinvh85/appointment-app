import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import useForceUpdate from 'use-force-update';
import { trackPromise } from 'react-promise-tracker';
import Cookies from 'js-cookie';
import { DisableComponentById, EnableComponentById } from '../App/Utilities';

export default function AdminLogin() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [validator] = useState(new SimpleReactValidator());

    const forceUpdate = useForceUpdate();

    const submitForm = () => {
        event.preventDefault();
        if (validator.allValid()) {
            const globalVars = require('../App/GlobalVars');
            DisableComponentById("signup-login-main-div");
            trackPromise(
                fetch(globalVars.GlobalVars.mainUrl + '/adminlogin', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        trialAllowed: globalVars.GlobalVars.trialAllowed,
                        trialPeriod: globalVars.GlobalVars.trialPeriod,
                        id: id,
                        password: password
                    })
                })
                    .then(response => {
                        return response.text();
                    })
                    .then(text => {
                        if (!text.includes("OK-")) {
                            alert(text);
                            EnableComponentById("signup-login-main-div");
                            return
                        }
                        Cookies.set(globalVars.GlobalVars.loginCookie, text);
                        document.location.href = globalVars.GlobalVars.mainUrl;
                    })
                    .catch(error => {
                        alert(error);
                        EnableComponentById("signup-login-main-div");
                    }));
        } else {
            validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            forceUpdate();
        }
    }

    return (
        <div id="login-div">
            <form onSubmit={() => submitForm()}>
                <input type="text" id="id" className="signup-login" placeholder="Shop ID or Admin Email" value={id} onChange={event => setId(event.target.value)} />
                <div className="validator">{validator.message('email or store id', id, 'required')}</div>
                <input type="password" id="password" className="signup-login" placeholder="Admin Password" value={password} onChange={event => setPassword(event.target.value)} />
                <div className="validator">{validator.message('password', password, 'required|max:50')}</div>
                <a href="./#/initresetpw">forget password?</a>
                <p></p>
                <button type="submit" id="send" className="signup-login">Send</button>
            </form>
        </div>
    )
}