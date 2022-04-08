import Transaction from './Transaction'
import { useStore } from '../Store'


export default function RecentActivity() {

    const user = useStore(store => store.user)

    if (!user) return <h1>Loading...</h1>

    const savingsAccount = user?.accounts.find(account => account.type === "Savings")
    const transactions = savingsAccount?.transactions
    const recentTransactions = transactions?.slice(0, transactions.length).reverse()

    return (
        <div className="transactions-page">
            <h3>Transactions</h3>
            <div className="transactions-container">
                <div className="transactions-header">
                    <h4>Data</h4>
                    <h4>Sender</h4>
                    <h4>Reciver</h4>
                    <h4>Amount</h4>
                </div>
                <div className="transactions-main">
                    {recentTransactions?.map(transaction => (
                        <Transaction transaction={transaction} key={transaction.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
