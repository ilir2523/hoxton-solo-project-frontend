import { Link } from 'react-router-dom'

export default function HomeSections() {

    return (
        <div className="home-sections">
            <section>
                <h2>My Accounts</h2>
                <div className="accounts">
                    <div><Link to="account">Current & Savings</Link></div>
                    <div><Link to="account">Term Deposits</Link></div>
                    <div><Link to="account">Loans and Finances</Link></div>
                    <div><Link to="account">Credit Card</Link></div>
                </div>
            </section>
            <section><h2>Payment</h2></section>
            <section><h2>Recent Activity</h2> </section>
            <section><h2>Quick Access</h2></section>
        </div>
    )
}