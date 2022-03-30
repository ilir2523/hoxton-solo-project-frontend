import { Link } from 'react-router-dom'
import "./LogIn.css"

export default function LogIn() {

    return (
        <div className="logIn-page">

            <div className="login-wraper">

                <div className="logIn-page-header">
                    <h1>HOXBANK</h1>
                    <img className="icon" src='../../images/bank1.png ' />
                </div>

                <div className="login">
                    <form id="form">
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>

                        <button type="submit" form="form"><span>Log In</span></button>
                    </form>

                    <Link className="register" to="/register">Register</Link>
                </div>

            </div>
        </div>
    )

}