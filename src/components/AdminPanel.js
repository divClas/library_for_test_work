import React, { useState } from 'react';

const AdminPanel = () => {
    const [users, setUsers] = useState([
        { id: 1, login: 'Пользователь', paswword: "User228", role: 'user' },
        { id: 2, login: 'Админ', paswword: "User228", role: 'admin' },
        { id: 3, login: 'Библиотека', paswword: "User228", role: 'librarian' },
    ]);

    const [newUserName, setNewUserName] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [newUserRole, setNewUserRole] = useState('');

    const [editMode, setEditMode] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [editedUserName, setEditedUserName] = useState('');
    const [editedUserPassword, setEditedUserPassword] = useState('');
    const [editedUserRole, setEditedUserRole] = useState('');

    const addUser = () => {
        const newUser = { id: users.length + 1, login: newUserName, paswword: newUserPassword, role: newUserRole };
        setUsers([...users, newUser]);
        setNewUserName('');
        setNewUserPassword('');
        setNewUserRole('');
    };

    const deleteUser = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
    };

    const editUser = (user) => {
        setEditMode(true);
        setCurrentUser(user);
        setEditedUserName(user.login);
        setEditedUserPassword(user.paswword);
        setEditedUserRole(user.role);
    };

    const saveUserChanges = () => {
        const updatedUsers = users.map((user) =>
            user.id === currentUser.id
                ? { ...user, login: editedUserName, paswword: editedUserPassword, role: editedUserRole }
                : user
        );
        setUsers(updatedUsers);
        setEditMode(false);
        setCurrentUser(null);
        setEditedUserName('');
        setEditedUserPassword('');
        setEditedUserRole('');
    };

    const handleInputChange = (event) => {
        setNewUserName(event.target.value);
    };

    const handleInputChangePS = (event) => {
        setNewUserPassword(event.target.value);
    };

    const handleInputChangeRole = (event) => {
        setNewUserRole(event.target.value);
    };

    return (
        <div>
            <h1>Администратор</h1>
            <h2>Список пользователей:</h2>
            <div className="user-list">
                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        {editMode && currentUser?.id === user.id ? (
                            <>
                                <div>
                                    <label>Имя пользователя:</label>
                                    <input type="text" value={editedUserName} onChange={(e) => setEditedUserName(e.target.value)} />
                                </div>
                                <div>
                                    <label>Пароль пользователя:</label>
                                    <input type="password" value={editedUserPassword} onChange={(e) => setEditedUserPassword(e.target.value)} />
                                </div>
                                <div>
                                    <label>Роль пользователя:</label>
                                    <select value={editedUserRole} onChange={(e) => setEditedUserRole(e.target.value)}>
                                        <option value="user">пользователь</option>
                                        <option value="admin">администратор</option>
                                        <option value="librarian">библиотекарь</option>
                                    </select>
                                </div>
                                <button onClick={saveUserChanges}>Сохранить</button>
                            </>
                        ) : (
                            <>
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
                                    <button onClick={() => editUser(user)}>Редактировать</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className='addUser_form conatainer'>
                <div className="addUser">
                    <h2>Добавить пользователя:</h2>
                    <form>
                        <div class="form-group">
                            <label for="newUserName">Имя пользователя:</label>
                            <input type="text" id="newUserName" value={newUserName} onChange={handleInputChange} placeholder="Имя пользователя" required />
                        </div>
                        <div class="form-group">
                            <label for="newUserPassword">Пароль пользователя:</label>
                            <input type="password" id="newUserPassword" value={newUserPassword} onChange={handleInputChangePS} placeholder="Пароль пользователя" required />
                        </div>
                        <div class="form-group">
                            <label for="newUserRole">Роль пользователя:</label>
                            <select id="newUserRole" value={newUserRole} onChange={handleInputChangeRole}>
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                                <option value="librarian">librarian</option>
                            </select>
                        </div>
                        <button type="button" onClick={addUser}>Добавить</button>

                    </form>
                </div>
            </div>

        </div >
    );
};

export default AdminPanel; //react.UseCallBack