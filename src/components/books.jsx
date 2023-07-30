import './../App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const BookCard = () => {
    const books = useSelector((state) => state.books);
    console.log(books);
    const dispatch = useDispatch();
    const [newBookTitle, setnewBookTitle] = useState('');
    const [newBookAuthor, setnewBookAuthor] = useState('');
    const [newBookGenre, setNewBookGenre] = useState('');
    const [newBookPublisher, setBookPublisher] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

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
        setnewBookTitle('');
        setnewBookAuthor('');
        setNewBookGenre('');
        setBookPublisher('');
    };
    const deleteBook = (bookId) => {
        dispatch({
            type: "DELETE_BOOK",
            payload: bookId,
        });
    }
    // добавление книг
    const handleInputChangeTitle = (event) => {
        setnewBookTitle(event.target.value);
    };

    const handleInputChangeAuthor = (event) => {
        setnewBookAuthor(event.target.value);
    };
    const handleInputChangeGenre = (event) => {
        setNewBookGenre(event.target.value);
    };
    const handleInputChangePublisher = (event) => {
        setBookPublisher(event.target.value);
    };
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    // добавление книг
    // поиск книг
    const filteredBooks = books.filter((book) => {
        const query = searchQuery.toLowerCase();

        return (

            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.genre.toLowerCase().includes(query) ||
            book.publisher.toLowerCase().includes(query)
        );
    });

    return (
        <div className='Book_for_libbrarian'>
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
                    <div class="addUser">
                        <h2>Добавить пользователя:</h2>
                        <form>
                            <div class="form-group">
                                <label for="newUserName">Название Книги:</label>
                                <input type="text" id="newUserName" value={newBookTitle} onChange={handleInputChangeTitle} placeholder="Имя пользователя" required />
                            </div>
                            <div class="form-group">
                                <label for="newUserPassword">Автор Книги:</label>
                                <input type="text" id="newUserPassword" value={newBookAuthor} onChange={handleInputChangeAuthor} placeholder="Автор Книги" required />
                            </div>
                            <div class="form-group">
                                <label for="newUserRole">Жанр Книги:</label>
                                <input type="text" id="newUserPassword" value={newBookGenre} onChange={handleInputChangeGenre} placeholder="Жанр Книги" required />
                            </div>
                            <div class="form-group">
                                <label for="newUserRole">Издатель Книги:</label>
                                <input type="text" id="newUserPassword" value={newBookPublisher} onChange={handleInputChangePublisher} placeholder="Издатель Книги" required />
                            </div>
                            <button type="button" onClick={addBook}>Добавить</button>

                        </form>
                    </div>
                </div>
            </div></div>

    );
};

export default BookCard;
