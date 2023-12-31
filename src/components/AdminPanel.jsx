import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AdminPanel = () => {
    const users = useSelector(state => state.users);
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const [newUserName, setNewUserName] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [newUserRole, setNewUserRole] = useState('');

    const [editMode, setEditMode] = useState(false);
    const [editingUserId, setEditingUserId] = useState(null);

    const addUser = () => {
        const newUser = { id: users.length + 1, login: newUserName, paswword: newUserPassword, role: newUserRole };
        dispatch({
            type: 'ADD_USER',
            payload: newUser,
        });
        setNewUserName('');
        setNewUserPassword('');
        setNewUserRole('');
        setEditingUserId(null);
    };

    const deleteUser = (userId) => {
        dispatch({
            type: "DELETE_USER",
            payload: userId,
        });
    };

    const editUser = (userId, updatedUserFields) => {
        const updatedUser = { ...users.find(user => user.id === userId), ...updatedUserFields };
        dispatch({
            type: 'EDIT_USER',
            payload: { id: userId, updatedUser: updatedUser },
        });
    }

    const handleSubmitEdit = (event, userId) => {
        event.preventDefault();
        const updatedUser = {
            login: event.target.login.value,
            paswword: event.target.password.value,
            role: event.target.role.value,
        };
        editUser(userId, updatedUser);
        setEditMode(false);
        setEditingUserId(null);
    };

    const logoutUser = () => {
        return {
            type: 'LOGOUT_USER',
        };
    };

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    if (!currentUser || (currentUser && currentUser.role !== 'admin')) {
        history.push('/login');
        return null;
    }

    return (
        <div className='admin_panel'>
            <div>
                <h1>Администратор</h1>
                <h2>Список пользователей:</h2>
                <div className="user-list">
                    {users.map((user) => (
                        <div key={user.id} className="user-card">
                            {editingUserId === user.id ? (
                                <form className='edituser' onSubmit={(event) => handleSubmitEdit(event, user.id)}>
                                    <div>
                                        <label>Имя пользователя:</label>
                                        <input type="text" name='login' defaultValue={user.login} />
                                    </div>
                                    <div>
                                        <label>Пароль пользователя:</label>
                                        <input type="password" name='password' defaultValue={user.paswword} />
                                    </div>
                                    <div>
                                        <label>Роль пользователя:</label>
                                        <select name='role' defaultValue={user.role}>
                                            <option value="user">пользователь</option>
                                            <option value="admin">администратор</option>
                                            <option value="librarian">библиотекарь</option>
                                        </select>
                                    </div>
                                    <button type='submit'>Сохранить</button>
                                </form>
                            ) : (
                                <div className="login">
                                    <ul>
                                        <li>
                                            <strong>Логин:</strong> {user.login}
                                        </li>
                                        <li>
                                            <strong>Пароль:</strong> {user.paswword}
                                        </li>
                                        <li>
                                            <strong>Роль:</strong> {user.role}
                                        </li>
                                    </ul>
                                    <div className='button_control'>
                                        <button onClick={() => deleteUser(user.id)}>Удалить</button>
                                        <button onClick={() => setEditingUserId(user.id)}>Редактировать</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='addUser_form conatainer'>
                    <div className="addUser">
                        <h2>Добавить пользователя:</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="newUserName">Имя пользователя:</label>
                                <input type="text" id="newUserName" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} placeholder="Имя пользователя" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newUserPassword">Пароль пользователя:</label>
                                <input type="password" id="newUserPassword" value={newUserPassword} onChange={(e) => setNewUserPassword(e.target.value)} placeholder="Пароль пользователя" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newUserRole">Роль пользователя:</label>
                                <select id="newUserRole" value={newUserRole} onChange={(e) => setNewUserRole(e.target.value)}>
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                    <option value="librarian">librarian</option>
                                </select>
                            </div>
                            <button type="button" onClick={addUser}>Добавить</button>
                        </form>
                    </div>
                </div>
                <button onClick={handleLogout}>Выйти</button>
            </div>
        </div>
    );
};

export default AdminPanel;