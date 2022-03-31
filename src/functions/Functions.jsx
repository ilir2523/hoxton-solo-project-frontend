export function logIn(email, password, setUser) {
    fetch('http://localhost:4001/sign-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                localStorage.token = data.token
                setUser(data.user) // data === { user, token }
            }
        })
}

export function signUp(name, email, phone, address, dateOfBirth, password, setUser) {
    fetch('http://localhost:4001/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password, name, phone, address, dateOfBirth})
    })
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                localStorage.token = data.token
                setUser(data.user) // data === { user, token }
            }
        })
}