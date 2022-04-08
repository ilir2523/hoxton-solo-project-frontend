import { useStore } from "../Store"
import {changePassword} from "../functions/Functions"

export default function ChangePassword() {

    const user = useStore(store => store.user)

    console.log(user)
    if (user === null) return <h1>Loading...</h1>

    return (
        <div className="change-password">
            <form className="change-password-form"
            onSubmit={e => {
                e.preventDefault()
                changePassword(e.target.email.value, e.target.oldPassword.value, e.target.newPassword.value)
                // setTimeout(function () { location.reload(true); }, 1000);
            }}>
                <h3>Change Password</h3>

                <input type="email" placeholder="Email" defaultValue={user.email} name="email"/>
                <input type="password" placeholder="Old Password" name="oldPassword"/>
                <input type="password" placeholder="New Password" name="newPassword"/>
                <button type="submit" className="change-password-button">Change Password</button>
            </form>
        </div>
    )
}