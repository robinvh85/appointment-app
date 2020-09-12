import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import useForceUpdate from 'use-force-update';
import { trackPromise } from 'react-promise-tracker';
import './SignupLoginStyle.css';

import LoadingIndicator from '../component/LoadingIndicator';
import { DisableComponentById } from '../Utilities';

export default function ForgetPWEmailAsk() {
    const [email, setEmail] = useState("");
    const [validator] = useState(new SimpleReactValidator());

    const forceUpdate = useForceUpdate();

    const submitForm = () => {
        event.preventDefault();
        if (validator.allValid()) {
            const globalVars = require('../App/GlobalVars');
            DisableComponentById("signup-login-main-div");
            trackPromise(
                fetch(globalVars.GlobalVars.mainUrl + '/initpwreset', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email
                    })
                })
                    .then(response => {
                        return response.text();
                    })
                    .then(text => {
                        if (text != "OK") {
                            alert(text)
                        } else {
                            alert("Instruction has been emailed to you.")
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
                <div id="app-name-div">Please provide your email.</div>
                <div id="signup-div">
                    <form onSubmit={() => submitForm()}>
                        <input type="email" id="email" className="signup-login" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                        {validator.message('email', email, 'required|email')}
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