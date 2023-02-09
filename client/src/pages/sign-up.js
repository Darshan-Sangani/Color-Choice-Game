import React, { useState } from 'react';

function SignUpPage() {
    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
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
                    <label>NAME :-</label>
                    <input type="text" onChange={(e) => setData({ ...data, name: e.target.value })} />
                </div>
                <br />
                <div>
                    <label>EMAIL :-</label>
                    <input type="text" onChange={(e) => setData({ ...data, email: e.target.value })} />
                </div>
                <br />
                <div>
                    <label>MOBILE :-</label>
                    <input type="password" onChange={(e) => setData({ ...data, mobile: e.target.value })} />
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

export default SignUpPage