import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { useLocation } from "react-router-dom";
import useForceUpdate from 'use-force-update';
import { trackPromise } from 'react-promise-tracker';
import './SignupLoginStyle.css';

import LoadingIndicator from '../component/LoadingIndicator';
import { DisableComponentById } from '../Utilities';


export default function UpdatePw() {
    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("")
    const [validator] = useState(new SimpleReactValidator());

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[~!@#$%^&*\\(\\)<>?])[A-Za-z\\d~!@#$%^&*\\(\\)<>?]{8,50}$")

    const location = useLocation()

    const forceUpdate = useForceUpdate();

    const submitForm = () => {
        event.preventDefault();
        if (validator.allValid() && strongRegex.test(password)) {
            const globalVars = require('../App/GlobalVars');
            const urlParams = new URLSearchParams(location.search)
            const uuidParam = urlParams.get("uuid")
            if (uuidParam === null) {
                alert("Invalid URL")
                document.location.href = globalVars.GlobalVars.mainUrl
                return
            }
            DisableComponentById("signup-login-main-div");
            trackPromise(
                fetch(globalVars.GlobalVars.mainUrl + '/updatepw', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userUUID: uuidParam,
                        password: password
                    })
                })
                    .then(response => {
                        return response.text();
                    })
                    .then(text => {
                        if (text != "OK") {
                            alert(text)
                        } else {
                            alert("You have changed your password.")
                        }
                        document.location.href = globalVars.GlobalVars.mainUrl
                    })
                    .catch(error => {
                        alert(error)
                        document.location.href = globalVars.GlobalVars.mainUrl
                    }));
        } else {
            validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            forceUpdate();
        }
    }

    return (
        <div>
            <div id="signup-login-main-div">
                <div id="app-name-div">Please update your password.</div>
                <div id="signup-div">
                    <form onSubmit={() => submitForm()}>
                        <input type="password" id="new-password" className="signup-login" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                        <div className="validator">
                            {strongRegex.test(password) ?
                                ""
                                : password === "" ?
                                    validator.messageWhenPresent('password', password, 'required')
                                    : "password is not valid"}
                        </div>
                        <div id="pw-instruction" align="left">
                            {'Password instruction:' +
                                '\n\tMust have length between 8 and 50' +
                                '\n\tMust have at least one lower case character' +
                                '\n\tMust have at least one uper case character' +
                                '\n\tMust have at least one digit' +
                                '\n\tMust have at least one special character: ~!@#$%^&*'}
                        </div>
                        <input type="password" id="confirm-new-password" className="signup-login" placeholder="Confirm Password" value={passwordC} onChange={event => setPasswordC(event.target.value)} />
                        <div className="validator">
                            {passwordC === "" ?
                                validator.messageWhenPresent('passwordConfirm', passwordC, 'required')
                                : password === passwordC ? null
                                    : <div>Passwords must match</div>}
                        </div>
                        <br></br>
                        <button type="submit" id="send" className="signup-login">Send</button>
                        <br></br>
                    </form>
                </div>
            </div>
            <LoadingIndicator></LoadingIndicator>
        </div>
    )
}