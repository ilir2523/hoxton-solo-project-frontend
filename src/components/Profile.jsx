import { useStore } from "../Store"
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Profile() {
    const user = useStore(store => store.user)

    console.log(user)
    if (user === null) return <h1>Loading...</h1>

    return (
        <div className="profile-page">
            <h3>My Profile</h3>
            <div className="profile-container">
                <div className="profile-header">
                    <img src="../../images/man.png" alt="avatar-icon" />
                    <h4>{user.name}</h4>
                </div>
                <div className="profile-main">
                    <ul>
                        <li><Link to="/home/profile">Profile</Link></li>
                        <li><Link to="/home/profile">Primary Account</Link></li>
                        <li><Link to="/home/profile/changePassword">Change Password</Link></li>
                    </ul>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}