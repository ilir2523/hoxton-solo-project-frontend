import create from 'zustand'

export const useStore = create((set, get) => ({

    user: null,
    account: null,
    fetchUser: () => {
        if (localStorage.token) {
            fetch('http://localhost:4001/validate', {
                headers: {
                    Authorization: localStorage.token
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        alert('Validation failed.')
                    } else {
                        set({ user: data })
                    }
                })
        }
    },
    logIn: (email, password) => {
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
                set({ user: data.user})
            }
        })
    },
    signUp: (name, email, phone, address, dateOfBirth, password) => {
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
                set({ user: data.user})
            }
        })
    },
    signOut: () => {
        localStorage.removeItem('token')
        set({ user: null })
    }
}))