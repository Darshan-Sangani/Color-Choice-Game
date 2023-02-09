import React, { useState } from 'react';

function LoginPage() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const login = () => {
        alert('hiii')
    }

    return (
        <form method="post" onSubmit={login}>
            <div>
                <h3>Login Page:-</h3>
                <div>
                    <label>EMAIL :-</label>
                    <input type="text" onChange={(e) => setData({ ...data, email: e.target.value })} />
                </div>
                <br />
                <div>
                    <label>PASSWORD :-</label>
                    <input type="password" onChange={(e) => setData({ ...data, password: e.target.value })} />
                </div>
                <br />
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default LoginPage