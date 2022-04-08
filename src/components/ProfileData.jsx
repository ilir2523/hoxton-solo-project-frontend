import { useStore } from "../Store"

export default function () {

    const user = useStore(store => store.user)

    console.log(user)
    if (user === null) return <h1>Loading...</h1>

    return (
        <div className="profile-data">
            <div className="profile-adres"><span>Address: {user.address}</span></div>
            <div className="profile-email-phone"><span>Email: {user.email}</span> <span>Phone: {user.phone}</span></div>
            <div className="profile-dateOfBirth"><span>Date of birth: {user.dateOfBirth} </span></div>
        </div>
    )
}