import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const BookCard = () => {
    const currentUser = useSelector(state => state.currentUser);
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const [newBookTitle, setNewBookTitle] = useState('');
    const [newBookAuthor, setNewBookAuthor] = useState('');
    const [newBookGenre, setNewBookGenre] = useState('');
    const [newBookPublisher, setNewBookPublisher] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

    const addBook = () => {
        const newBook = {
            id: books.length + 1,
            title: newBookTitle,
            author: newBookAuthor,
            genre: newBookGenre,
            publisher: newBookPublisher,
        };
        dispatch({
            type: "ADD_BOOK",
            payload: newBook,
        });
        setNewBookTitle('');
        setNewBookAuthor('');
        setNewBookGenre('');
        setNewBookPublisher('');
    };

    const deleteBook = (bookId) => {
        dispatch({
            type: "DELETE_BOOK",
            payload: bookId,
        });
    };

    const logoutUser = () => {
        return {
            type: 'LOGOUT_USER',
        };
    };

    const handleInputChangeTitle = (event) => {
        setNewBookTitle(event.target.value);
    };

    const handleInputChangeAuthor = (event) => {
        setNewBookAuthor(event.target.value);
    };

    const handleInputChangeGenre = (event) => {
        setNewBookGenre(event.target.value);
    };

    const handleInputChangePublisher = (event) => {
        setNewBookPublisher(event.target.value);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredBooks = books.filter((book) => {
        const query = searchQuery.toLowerCase();

        return (
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.genre.toLowerCase().includes(query) ||
            book.publisher.toLowerCase().includes(query)
        );
    });

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    if (!currentUser || (currentUser && currentUser.role !== 'librarian')) {
        history.push('/login');
        return null;
    }

    return (
        <div className='Book_for_libbrarian'>
            <div>
                <div className="search-box">
                    <label>
                        <h1>Поиск книг</h1>
                    </label>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Поиск книг"
                    />
                </div>
                <div className="book-card11">
                    <div className="booooks">
                        <h1>Книги</h1>
                        <div className="books-list">
                            {filteredBooks.map((book) => (
                                <div key={book.id} className="book-card">
                                    <ul>
                                        <li>
                                            <strong>название:</strong> {book.title}
                                        </li>
                                        <li>
                                            <strong>автор:</strong> {book.author}
                                        </li>
                                        <li>
                                            <strong>Жанр:</strong> {book.genre}
                                        </li>
                                        <li>
                                            <strong>Издатель:</strong> {book.publisher}
                                        </li>
                                    </ul>
                                    <div className='button_control'>
                                        <button onClick={() => deleteBook(book.id)}>Удалить</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='addUser_form conatainer'>
                        <div className="addUser">
                            <h2>Добавить пользователя:</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="newUserName">Название Книги:</label>
                                    <input type="text" id="newUserName" value={newBookTitle} onChange={handleInputChangeTitle} placeholder="Имя пользователя" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newUserPassword">Автор Книги:</label>
                                    <input type="text" id="newUserPassword" value={newBookAuthor} onChange={handleInputChangeAuthor} placeholder="Автор Книги" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newUserRole">Жанр Книги:</label>
                                    <input type="text" id="newUserPassword" value={newBookGenre} onChange={handleInputChangeGenre} placeholder="Жанр Книги" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newUserRole">Издатель Книги:</label>
                                    <input type="text" id="newUserPassword" value={newBookPublisher} onChange={handleInputChangePublisher} placeholder="Издатель Книги" required />
                                </div>
                                <button type="button" onClick={addBook}>Добавить</button>
                            </form>
                        </div>
                    </div>
                    <button onClick={handleLogout}>Выйти</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;