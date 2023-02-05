import { useState, useEffect, createContext } from "react";

// CREATE CONTEXT WITH A DEFAULT VALUE

export const AuthContext = createContext({
    isAuthenticated: false,
    user:null,
    login: () => {},
    logout: () => {},
})

// PROVIDER COMPONENT

const AuthProvider = ({children}) => {
    const [state, setState] = useState({
        isAuthenticated: false,
        user: null
    })

    useEffect(() => {
        // CHECK TOKEN IS EXIST OR NOT
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        if(token) {
            // CALL API HERE FOR LOGIN USER
            fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'}
        }).then(res => res.json())
        .then(data => {
            if(data.token) {
                localStorage.setItem('token', data.token)
                setState({
                    isAuthenticated: true,
                    user: data
                })
            }
            else {
                alert('username and password is not valid.')
            }
        })

        }
        else {
            localStorage.removeItem('token');
        }
    }, [])

    // LOGIN FUNCTION
    const login = (username, password) => {
        // API CALL HERE
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'}
        }).then(res => res.json())
        .then(data => {
            if(data.token) {
                localStorage.setItem('token', data.token)
                setState({
                    isAuthenticated: true,
                    user: data
                })
            }
            else {
                alert('username and password is not valid.')
            }
        })
    }

    // LOGOUT FUNCTION
    const logout = () => {
        localStorage.clear()
        setState({
            isAuthenticated: false,
            user: null
        })
    }

    return(
        <>
            <AuthContext.Provider value={{...state, login, logout}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthProvider;