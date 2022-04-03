import './Home.css'
import { Outlet, Link } from 'react-router-dom';
import { useStore } from "../Store"
import { useEffect } from 'react';


export default function Home() {

    const fetchUser = useStore(store => store.fetchUser)

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className="home-page-background">

            <div className="home-page">
                <div className="home-wraper">
                    <div className="home">
                        <div className="home-menu">
                            <div className="nav-menu">
                                <Link to={'/home'}><img src="../../images/home_black_24dp.svg"/></Link>
                                <Link to={'/home/profile'}><img src="../../images/account_circle_black_24dp.svg"/></Link>
                                <Link to={''}><img src="../../images/home_black_24dp.svg"/></Link>
                                <Link to={''}><img src="../../images/home_black_24dp.svg"/></Link>
                            </div>

                        </div>
                        <main className="home-main">
                            <header>
                                <div className="search">Search</div>
                                <div className="profile">Profile</div>
                            </header>
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}