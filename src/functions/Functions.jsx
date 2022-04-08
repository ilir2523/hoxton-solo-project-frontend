export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function createTransaction(toAccountId, fromAccountId, amount) {
    fetch('http://localhost:4001/createTransfer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.token
        },
        body: JSON.stringify({ toAccountId, fromAccountId, amount })
    })
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                alert("Transaction created successfully.")
            }
        })
}

export function fetchAccountById(id) {
    return fetch(`http://localhost:4001/account/${id}`)
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                return data
            }
        })
}