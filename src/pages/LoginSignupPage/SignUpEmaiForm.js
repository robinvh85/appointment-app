import React, { useState } from 'react';
import './SignupLoginStyle.css';
import useForceUpdate from 'use-force-update';
import SimpleReactValidator from 'simple-react-validator';
import { trackPromise } from 'react-promise-tracker';
import { DisableComponentById, EnableComponentById } from '../App/Utilities';

export default function SignupEmailForm() {
    const [email, setEmail] = useState("");
    const [validator] = useState(new SimpleReactValidator());

    const forceUpdate = useForceUpdate();

    const submitForm = () => {
        event.preventDefault();
        if (validator.allValid()) {
            const globalVars = require('../App/GlobalVars');
            DisableComponentById("signup-login-main-div");
            trackPromise(
                fetch(globalVars.GlobalVars.mainUrl + '/emailforsignup', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                    })
                })
                    .then(response => {
                        return response.text();
                    })
                    .then(text => {
                        if (text != "OK") {
                            alert(text);
                            EnableComponentById("signup-login-main-div");
                            return;
                        } else {
                            alert("Please check your email to proceed.")
                            window.location.reload();
                        }
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
        <div id="signup-div">
            <form onSubmit={() => submitForm()}>
                <input type="email" id="email" className="signup-login" placeholder="Admin Email" value={email} onChange={event => setEmail(event.target.value)} />
                <div className="validator">{validator.message('email', email, 'required|email|max:100')}</div>
                <p></p>
                <button type="submit" id="send" className="signup-login">Send</button>
            </form>
        </div>
    )
}