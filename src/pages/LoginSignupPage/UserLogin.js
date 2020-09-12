import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import useForceUpdate from 'use-force-update';
import { DisableComponentById, EnableComponentById } from '../App/Utilities';

export default function UserLogin() {
    const [shopID, setShopID] = useState("")
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [validator] = useState(new SimpleReactValidator());

    const forceUpdate = useForceUpdate();
    // useEffect(() => {
    //     validator.showMessages();
    // });

    const submitForm = () => {
        event.preventDefault();
        if (validator.allValid()) {
            alert('You submitted the form and stuff!');
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
                <input type="text" id="shopID" className="signup-login" placeholder="Shop ID" value={shopID} onChange={event => setShopID(event.target.value)} />
                <div className="validator">{validator.message('shop id', shopID, 'required|max:100')}</div>
                <input type="text" id="userID" className="signup-login" placeholder="User ID" value={userID} onChange={event => setUserID(event.target.value)} />
                <div className="validator">{validator.message('user id', userID, 'required|max:100')}</div>
                <input type="password" id="password" className="signup-login" placeholder="User Password" value={password} onChange={event => setPassword(event.target.value)} />
                <div className="validator">{validator.message('password', password, 'required|max:50')}</div>
                <p></p>
                <button type="submit" id="send" className="signup-login">Send</button>
            </form>
        </div>
    )
}