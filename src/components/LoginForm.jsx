import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users); // Получение данных о пользователях из Redux Store

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const user = users.find((u) => u.login === login && u.paswword === password);
        console.log(users);
        if (user) {
            if (user.login === 'admin' && user.paswword === 'admin' || user.login === 'library' && user.paswword === 'library' ) {
                dispatch({
                    type: 'SET_CURRENT_USER',
                    payload: user,
                });
            } else {
                alert('Доступ разрешен только для администраторов.');
            }
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
            <button type="submit">{console.log()}Войти</button>
        </form>
    );
};

export default LoginForm;