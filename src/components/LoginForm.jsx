import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'

const LoginForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const history = useHistory()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const user = users.find((u) => u.login === login && u.paswword === password);
        if (user) {
            dispatch({
                type: 'SET_CURRENT_USER',
                payload: user,
            });
            const path = user.role === 'admin' ? '/AdminPanel' : '/books'
            history.push(path)
        } else {
            alert('Неверный логин или пароль.');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="login">Логин:</label>
                <input type="text" id="login" value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Войти</button>
        </form>
    );
};

export default LoginForm;