import './Home.css'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useStore } from "../Store"
import { useEffect } from 'react';


export default function Home() {
    const navigate = useNavigate()

    const fetchUser = useStore(store => store.fetchUser)
    const signOut = useStore(store => store.signOut)

    useEffect(() => {
        fetchUser()
    }, [])

    const user = useStore(store => store.user)
    console.log(user)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (user === null) navigate('/')
        }, 5000);
        return () => clearTimeout(timer);
    }, [user, navigate])

    return (
        <div className="home-page-background">

            <div className="home-page">
                <div className="home-wraper">
                    <div className="home">
                        <div className="home-menu">
                            <div className="nav-menu">
                                <Link to={'/home'}><img src="../../images/home_black_24dp.svg" /></Link>
                                <Link to={'/home/profile'}><img src="../../images/account_circle_black_24dp.svg" /></Link>
                                <Link to={''}><img src="../../images/home_black_24dp.svg" /></Link>
                                <Link to={''}><img src="../../images/home_black_24dp.svg" /></Link>
                            </div>

                        </div>
                        <main className="home-main">
                            <header>
                                <div className="search">Search</div>
                                <div className="profile" onClick={e => {
                                    signOut()
                                    navigate('/')
                                }}>Log Out</div>
                            </header>
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}