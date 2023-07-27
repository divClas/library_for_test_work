import React, { useState,useCallback} from 'react';

const AdminPanel = () => {
    // console.log("Render!")
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
    
    const handleSubmitEdit=(event,id)=>{
        event.preventDefault()
        const updatedUsers = users.map((user) =>
        user.id === currentUser.id
            ? { ...user, login: event.target[0].value, paswword: event.target[1].value, role: event.target[2].value }
            : user
        );
        setUsers(updatedUsers);
        setEditMode(false);
        setCurrentUser(null);

    }
    
    return (
        <div>
            <h1>Администратор</h1>
            <h2>Список пользователей:</h2>
            <div className="user-list">
                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        {editMode && currentUser?.id === user.id ? (
                            <form onSubmit={(event)=>handleSubmitEdit(event,user.id)}>
                                <div>
                                    <label>Имя пользователя:</label>
                                    {/*  onChange={(e) => setEditedUserName(e.target.value)} */}
                                    <input type="text" name='name' defaultValue={user.login}/>
                                </div>
                                <div>
                                    <label>Пароль пользователя:</label>
                                    {/*  onChange={(e) => setEditedUserPassword(e.target.value)} */}
                                    <input type="password" name='password' defaultValue={user.paswword} />
                                </div>
                                <div>
                                    <label>Роль пользователя:</label>
                                    {/*  onChange={(e) => setEditedUserRole(e.target.value)} */}
                                    <select name='role' defaultValue={user.role}>
                                        <option value="user">пользователь</option>
                                        <option value="admin">администратор</option>
                                        <option value="librarian">библиотекарь</option>
                                    </select>
                                </div>
                                <button type='submit' >Сохранить</button>
                                {/* onClick={saveUserChanges} */}
                            </form>
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