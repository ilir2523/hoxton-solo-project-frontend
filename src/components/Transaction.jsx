import { useEffect } from 'react'
import { useStore } from '../Store'
import { numberWithCommas } from '../functions/Functions'


export default function Transaction({ transaction }) {
    
    if (!transaction) return <h1>Loading...</h1>
    return (
        <div className="activity" key={transaction.id}>
            <span>{transaction.completedAt.substring(0, 10)}</span>
            <span>{transaction.sender}</span>
            <span>{transaction ? numberWithCommas(transaction.amount) : null}{transaction.isPositive ? '(+)' : '(-)'}</span>
        </div>
    )
}