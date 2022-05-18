import React, { useContext } from 'react';
import UserContext from './userContex';

function Login(props) {
    const { onLoggedIn } = useContext(UserContext);

    return (
        <div>
            <button onClick={() => onLoggedIn("username")}>
                Login
            </button>
        </div>
    );
}

export default Login;