import React from 'react'
import { Button } from '@material-ui/core';
import './style/login.scss'
import { auth, provider } from './firebase';
import { useStateValue } from './Stateprovider';
import { actionTypes } from './reducer';
function Login() {
    const [{ }, dispatch] = useStateValue()

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="http://3.bp.blogspot.com/-2fVvKtxqwB0/VUXkWMb--kI/AAAAAAAACI8/ANNIWneBF2Y/s1600/Whatsapp-logo-vector.png" alt="whatsapp logo" />
                <div className="login_text">
                    <h1>Sign in to WhatsApp Clone</h1>
                </div>
                <Button onClick={signIn} >
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
