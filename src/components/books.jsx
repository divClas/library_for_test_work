import './../App.css';
import React, { useState } from 'react';

const BookCard = () => {
    const [books, setBoks] = useState([
        { id: 1, title: '«Властелин колец»', author: 'Джон Р. Р. Толкин', genre: 'фантастика', publisher: 'КИНО' },
        { id: 2, title: '«Гордость и предубеждение»', author: 'Джейн Остин', genre: 'экшен', publisher: 'КИНО' },
        { id: 3, title: '«Тёмные начала»', author: 'Филип Пулман', genre: 'коммедия', publisher: 'кот' },
        { id: 4, title: '«Автостопом по галактике»', author: '	Дуглас Адамс', genre: 'фантастика', publisher: 'алея' },
        { id: 5, title: '«Гарри Поттер и Кубок огня»', author: 'Джоан Роулинг', genre: 'фантастика', publisher: 'Теплый' },
        { id: 6, title: '«Убить пересмешника»', author: 'Харпер Ли', genre: 'детектив', publisher: 'Солнце' },
        { id: 7, title: '«Винни Пух»', author: 'Алан Александр Милн', genre: 'повесть', publisher: 'алея' },
        { id: 8, title: '«Война и мир»', author: 'Лев Толстой', genre: 'роман-эпопея', publisher: 'кот' },
    ]);
    const [newBookTitle, setnewBookTitle] = useState('');
    const [newBookAuthor, setnewBookAuthor] = useState('');
    const [newBookGenre, setNewBookGenre] = useState('');
    const [newBookPublisher, setBookPublisher] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const addBoock = () => {
        const newBook = {
            id: books.length + 1, title: newBookTitle, author: newBookAuthor,
            genre: newBookGenre, publisher: newBookPublisher
        };
        setBoks([...books, newBook]);
        setnewBookTitle('');
        setnewBookAuthor('');
        setNewBookGenre('');
        setBookPublisher('');

    };
    //удаление книги 
    const deleteBook = (bookId) => {
        const updatedBooks = books.filter((book) => book.id !== bookId);
        setBoks(updatedBooks);
    };
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
                            <button type="button" onClick={addBoock}>Добавить</button>

                        </form>
                    </div>
                </div>
            </div></div>

    );
};

export default BookCard;
