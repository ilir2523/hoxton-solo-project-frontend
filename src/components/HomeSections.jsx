import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../Store'
import { numberWithCommas } from '../functions/Functions'

export default function HomeSections() {

    const user = useStore(store => store.user)

    if (!user) return <h1>Loading...</h1>

    if (user) {

        const savingsAccount = user?.accounts.find(account => account.type === "Savings")
        // console.log(savingsAccount)

        return (
            <div className="home-sections">
                <section>
                    <h2>My Accounts</h2>
                    <div className="accounts">
                        <div><Link to="#">{"Current & Savings: "}{savingsAccount?.currency} {savingsAccount ? numberWithCommas(savingsAccount?.amountInAccount) : null}</Link></div>
                        <div><Link to="#">Term Deposits</Link></div>
                        <div><Link to="#">Loans and Finances</Link></div>
                        <div><Link to="#">Credit Card</Link></div>
                    </div>
                </section>
                <section>
                    <h2>Payment</h2>
                    <div className="payments-container">
                        <div className="payment">
                            <img src="../../images/transfer-money.png" alt="" />
                            <span className="payment-name">Transfer money</span>
                        </div>
                        <div className="payment">
                            <img src="../../images/transfer-money.png" alt="" />
                            <span className="payment-name">Transfer money</span>
                        </div>
                        <div className="payment">
                            <img src="../../images/transfer-money.png" alt="" />
                            <span className="payment-name">Transfer money</span>
                        </div>
                        <div className="payment">
                            <img src="../../images/transfer-money.png" alt="" />
                            <span className="payment-name">Transfer money</span>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Recent Activity</h2>
                    <div className="activity-container">
                        {savingsAccount?.transactions?.map(transaction => (
                            <div className="activity" key={transaction.id}>
                                <span>{transaction.completedAt.substring(0, 10)}</span>
                                <span>{savingsAccount?.title}</span>
                                <span>{transaction ? numberWithCommas(transaction?.amount) : null}{transaction.isPositive ? '(+)' : '(-)'}</span>
                            </div>
                        ))}
                    </div>
                </section>
                <section><h2>Quick Access</h2></section>
            </div>
        )
    }
}