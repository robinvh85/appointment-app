import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import useForceUpdate from 'use-force-update';
import { useLocation } from "react-router-dom";
import { trackPromise } from 'react-promise-tracker';
import { DisableComponentById, EnableComponentById } from '../App/Utilities';
import LoadingIndicator from '../component/LoadingIndicator';

export default function Signup() {
    const [storeID, setStoreID] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("")
    const [business, setBusiness] = useState("")
    const [validator] = useState(new SimpleReactValidator());

    const location = useLocation()
    const forceUpdate = useForceUpdate();
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[~!@#$%^&*\\(\\)<>?])[A-Za-z\\d~!@#$%^&*\\(\\)<>?]{8,50}$")

    const submitForm = () => {
        event.preventDefault();
        if (validator.allValid() && strongRegex.test(password)) {
            const globalVars = require('../App/GlobalVars');
            const urlParams = new URLSearchParams(location.search)
            const s_id = urlParams.get("s_id")
            if (s_id === null) {
                alert("Invalid URL")
                document.location.href = globalVars.GlobalVars.mainUrl
                return
            }
            DisableComponentById("signup-login-main-div");
            trackPromise(
                fetch(globalVars.GlobalVars.mainUrl + '/signup', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        storeID: storeID,
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        password: password,
                        business: business,
                        signUpID: s_id
                    })
                })
                    .then(response => {
                        return response.text();
                    })
                    .then(text => {
                        if (text != "OK") {
                            alert(text);
                            EnableComponentById("signup-login-main-div");
                            if (text.includes("please change")) {
                                return
                            }
                        } else {
                            alert("Congratulation!\nYour account has been sucessfully created.");
                        }
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
        <div>
            <div id="signup-login-main-div">
                <div id="signup-div">
                    <form onSubmit={() => submitForm()}>
                        <input type="text" id="storeid" className="signup-login" placeholder='Choose a Store ID (e.g "MYSTORE")' value={storeID} onChange={event => setStoreID(event.target.value)} />
                        <div className="validator">{validator.message('store id', storeID, 'required|max:50|regex:^\\S+$')}</div>
                        <input type="text" id="first" className="signup-login" placeholder="First Name" value={firstname} onChange={event => setFirstname(event.target.value)} />
                        <div className="validator">{validator.message('firstname', firstname, 'required|alpha_num_space|max:50')}</div>
                        <input type="text" id="last" className="signup-login" placeholder="Last Name" value={lastname} onChange={event => setLastname(event.target.value)} />
                        <div className="validator">{validator.message('lastname', lastname, 'required|alpha_num_space|max:50')}</div>
                        <input type="email" id="email" className="signup-login" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                        <div className="validator">{validator.message('email', email, 'required|email|max:100')}</div>
                        <input type="password" id="password" className="signup-login" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
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
                        <input type="password" id="confirm" className="signup-login" placeholder="Confirm Password" value={passwordC} onChange={event => setPasswordC(event.target.value)} />
                        <div className="validator">
                            {passwordC === "" ?
                                validator.messageWhenPresent('confirm password', passwordC, 'required')
                                : password === passwordC ? null
                                    : <div>Passwords must match</div>}
                        </div>
                        <input type="text" id="business" className="signup-login" placeholder="Business Name" value={business} onChange={event => setBusiness(event.target.value)} />
                        <div className="validator">{validator.message('business', business, 'required|alpha_num_space|max:100')}</div>
                        <p></p>
                        <button type="submit" id="send" className="signup-login">Send</button>
                    </form>
                </div>
            </div>
            <LoadingIndicator></LoadingIndicator>
        </div>
    )
}

