import { useEffect } from "react"
import { useStore } from "../Store"

export default function Profile() {
    // User State
    // const fetchUser = useStore(store => store.fetchUser)
    const user = useStore(store => store.user)

    // useEffect(() => {
    //     fetchUser()
    // }, [])

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
                {/* <hr /> */}
                <div className="profile-main">
                    <ul>
                        <li>Profile</li>
                        <li>Primary Account</li>
                    </ul>
                    <div className="profile-data">
                        <div className="profile-adres"><span>Address: {user.address}</span></div>
                        <div className="profile-email-phone"><span>Email: {user.email}</span> <span>Phone: {user.phone}</span></div>
                        <div className="profile-dateOfBirth"><span>Date of birth: { user.dateOfBirth } </span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}