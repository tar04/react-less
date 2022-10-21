import React, {useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {useAuth} from "../../hooks/useAuth";

const LoginPage = () => {

    const {logIn} = useAuth();

    const name = useRef();

    const navigate = useNavigate();

    const {state} = useLocation();

    return (
        <div>
            <input type="text" ref={name} placeholder={"Enter name"}/>
            <button onClick={() => logIn(name.current.value, () => navigate(state.pathname, {replace: true}))}>Log in
            </button>
        </div>
    );
};

export {LoginPage};