import { useStore } from "../Store"
import { numberWithCommas, createTransaction } from '../functions/Functions'


export default function TransferMoney() {
    const fetchUser = useStore(store => store.fetchUser)

    const user = useStore(store => store.user)

    // console.log(user)
    if (user === null) return <h1>Loading...</h1>
    if (user) {

    const savingsAccount = user?.accounts.find(account => account.type === "Savings")

    return (
        <div className="payments-page">
            <h3>Payments</h3>
            <div className="payments-page-container">
                <div className="transfer-money-header">
                    <h4>Transfer Money</h4>
                </div>
                <div className="transfer-money-main">
                    <form id="transfer-form" name="transfer-form" onSubmit={e => {
                        e.preventDefault()
                        createTransaction(e.target.toAccount.value, e.target.fromAccount.value, e.target.amount.value)
                        setTimeout(function () { location.reload(true); }, 1000);
                     }} >
                        <label>To Account Number</label>
                        <input type="number" placeholder="id" name="toAccount" required />
                        <label>Transfer From</label>
                        <input type="number" placeholder="id" name="fromAccount" defaultValue={savingsAccount?.id} required />
                        <label>Amount <span>(Balance: {savingsAccount?.currency} {savingsAccount ? numberWithCommas(savingsAccount?.amountInAccount) : null})</span></label>
                        <input type="number" placeholder="amount" name="amount" max={savingsAccount?.amountInAccount} required />
                        <div className="form-buttons">
                            <button type="submit" htmlFor="transfer-form" >Transfer</button>
                            <button type="reset">Cancel</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )
}
}