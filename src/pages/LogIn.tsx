import { Link } from 'react-router-dom'
import "./LogIn.css"
import { useStore } from "../Store"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export default function LogIn() {

    const logIn = useStore(store => store.logIn)
    const navigate = useNavigate()
    const fetchUser = useStore(store => store.fetchUser)
   
    useEffect(() => {
        fetchUser()
    }, [])

    const user = useStore(store => store.user)
    // console.log(user)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (user !== null) navigate('/home')
        }, 1000);
        return () => clearTimeout(timer);
    }, [user, navigate])

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
                            logIn(email, password)
                            navigate('/home')
                            // @ts-ignore
                            document.getElementById("form").reset();
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