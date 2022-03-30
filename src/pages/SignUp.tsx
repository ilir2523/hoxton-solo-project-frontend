import { Link } from 'react-router-dom'
import "./LogIn.css"

export default function SignUp() {

    return (
        <div className="signup-page">

            <div className="signup-wraper">

                <div className="signup-page-header">
                    <h1>HOXBANK</h1>
                    <img className="icon" src='../../images/bank1.png ' />
                </div>

                <div className="signup">
                Great! Give us some details about your account, so we can look you up.
                    <form id="form">
                        <input type="text" placeholder="Name"></input>
                        <input type="email" placeholder="Email"></input>
                        <input type="phone" placeholder="Phone"></input>
                        <input type="text" placeholder="Address"></input>
                        <input type="date" placeholder="Date of Birth"></input>
                        <input type="password" placeholder="Password"></input>

                        <button type="submit" form="form"><span>Register</span></button>
                        <Link className="signUp-logIn" to="/logIn">Log in →</Link>
                    </form>

                    
                </div>

            </div>
        </div>
    )

}