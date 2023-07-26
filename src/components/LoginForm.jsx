import React, { useState } from 'react';

const LoginForm = ({ users, handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Проверка наличия пользователя с введенным логином и паролем
        const user = users.find(
            (user) => user.login === username && user.password === password
        );

        if (user) {
            // Если пользователь найден, выполняем вход
            handleLogin(user);
            setError('');
        } else {
            setError('Неверный логин или пароль');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Логин:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit">Войти</button>
        </form>
    );
};

export default LoginForm;
