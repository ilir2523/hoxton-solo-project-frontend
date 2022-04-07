import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../Store'
import { numberWithCommas } from '../functions/Functions'
import Transaction from './Transaction'

export default function HomeSections() {

    const fetchUser = useStore(store => store.fetchUser)

    useEffect(() => {
        fetchUser()
    }, []);

    const user = useStore(store => store.user)

    if (!user) return <h1>Loading...</h1>

    if (user) {

        const savingsAccount = user?.accounts.find(account => account.type === "Savings")
        const transactions = savingsAccount?.transactions
        const recentTransactions = transactions?.slice(transactions.length - 4, transactions.length).reverse()

        return (
            <div className="home-sections">
                <section className="accounts-section">
                    <h2>My Accounts</h2>
                    <div className="accounts">
                        <div>
                            <Link to="#">
                                <span>{"Current & Savings: "}</span>
                                <span>{savingsAccount?.currency} {savingsAccount ? numberWithCommas(savingsAccount?.amountInAccount) : null}</span>
                            </Link>
                        </div>
                        <div><Link to="#">
                            <span>Term Deposits</span>
                            <span>LEK 00.0</span>
                        </Link>
                        </div>
                        <div><Link to="#">
                            <span>Loans and Finances</span>
                            <span>LEK 00.0</span>
                        </Link>
                        </div>
                        <div><Link to="#">
                            <span>Credit Card</span>
                            <span>LEK 00.0</span>
                        </Link>
                        </div>
                    </div>
                </section>
                <section className="payments-section">
                    <h2>Payment</h2>
                    <div className="payments-container">
                        <div className="payment">
                            <Link to="/home/transferMoney">
                                <img src="../../images/transfer-money.png" alt="" />
                                <span className="payment-name">Transfer Money</span>
                            </Link>
                        </div>
                        <div className="payment">
                            <Link to="#">
                                <img src="../../images/cash-payment.png" alt="" />
                                <span className="payment-name">Pay Bills</span>
                            </Link>
                        </div>
                        <div className="payment">
                            <Link to="#">
                                <img src="../../images/debitt-card.png" alt="" />
                                <span className="payment-name">Debit Card</span>
                            </Link>
                        </div>
                        <div className="payment">
                            <Link to="#">
                                <img src="../../images/credit-card.png" alt="" />
                                <span className="payment-name">Credit Card</span>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="activity-section">
                    <h2>Recent Activity</h2>
                    <div className="activity-container">
                        {recentTransactions.map(transaction => (
                            <Transaction transaction={transaction} key={transaction.id}/>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}