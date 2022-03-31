import './Home.css'
import HomeSections from '../components/HomeSections'
import { Navigate, Route, Routes } from 'react-router-dom';


export default function Home() {
    return (
        <div className="home-page-background">

            <div className="home-page">
                <div className="home-wraper">
                    <div className="home">
                        <div className="home-menu">
                            <div className="nav-menu">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                            </div>

                        </div>
                        <main className="home-main">
                            <header>
                                <div className="search">Search</div>
                                <div className="profile">Profile</div>
                            </header>
                            {/* <Routes>
                                <Route index element={<Navigate to='/home' />} />
                                <Route path='/home' element={<HomeSections />} />
                            </Routes> */}
                            <HomeSections />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}