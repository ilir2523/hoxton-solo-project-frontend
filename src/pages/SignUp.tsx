import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./LogIn.css"
import { signUp } from '../functions/Functions.jsx'


export default function SignUp() {
    const [user, setUser] = useState()
    console.log(user)

    return (
        <div className="log-in-background">

            <div className="signup-page">

                <div className="signup-wraper">

                    <div className="signup-page-header">
                        <h1>HOXBANK</h1>
                        <img className="icon" src='../../images/bank1.png ' />
                    </div>

                    <div className="signup">
                        Great! Give us some details about your account, so we can look you up.
                        <form id="form" onSubmit={e => {
                            e.preventDefault()
                            // @ts-ignore
                            const name = e.target.name.value
                            // @ts-ignore
                            const email = e.target.email.value
                            // @ts-ignore
                            const phone = e.target.phone.value
                            // @ts-ignore
                            const address = e.target.address.value
                            // @ts-ignore
                            const dateOfBirth = e.target.dateOfBirth.value
                            // @ts-ignore
                            const password = e.target.password.value
                            console.log(name, email, phone, address, dateOfBirth, password)
                            signUp(name, email, phone, address, dateOfBirth, password, setUser)
                            // @ts-ignore
                            // document.getElementById("form").reset();
                        }}>
                            <input type="text" placeholder="Name" name="name"></input>
                            <input type="email" placeholder="Email" name="email"></input>
                            <input type="phone" placeholder="Phone" name="phone"></input>
                            <input type="text" placeholder="Address" name="address"></input>
                            <input type="date" placeholder="Date of Birth" name="dateOfBirth"></input>
                            <input type="password" placeholder="Password" name="password"></input>

                            <button type="submit" form="form"><span>Register</span></button>
                            <Link className="signUp-logIn" to="/logIn">Log in →</Link>
                        </form>


                    </div>

                </div>
            </div>
        </div>
    )

}