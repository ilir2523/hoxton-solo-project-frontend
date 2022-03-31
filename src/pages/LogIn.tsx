import { Link } from 'react-router-dom'
import "./LogIn.css"
import { logIn } from '../functions/Functions.jsx'
import { useState } from 'react'

export default function LogIn() {
    const [user, setUser] = useState()

    return (
        <div className="log-in-background">

            <div className="logIn-page">

                <div className="login-wraper">

                    <div className="logIn-page-header">
                        <h1>HOXBANK</h1>
                        <img className="icon" src='../../images/bank1.png ' />
                    </div>

                    <div className="login">
                        <form id="form" onSubmit={e => {
                            e.preventDefault()
                            // @ts-ignore
                            const email = e.target.email.value
                            // @ts-ignore
                            const password = e.target.password.value
                            logIn(email, password, setUser)
                            // @ts-ignore
                            // document.getElementById("form").reset();
                        }}>
                            <input type="email" placeholder="Email" name="email"></input>
                            <input type="password" placeholder="Password" name="password"></input>

                            <button type="submit" form="form"><span>Log In</span></button>
                        </form>

                        <Link className="register" to="/register">Register →</Link>
                    </div>

                </div>
            </div>
        </div>
    )

}