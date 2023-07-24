import React from 'react';
import BookCard from './books';
import './../App.css';

const ClientPanel = () => {
    const books = [
        {
            id: 1,
            title: 'Книга 1',
            author: 'Автор 1',
            genre:'Жанр 1',
            publisher: 'Издатель 1'
        },
        {
            id: 2,
            title: 'Книга 2',
            author: 'Автор 2',
            genre: 'Жанр 2',
            publisher: 'Издатель 2'
        },
        {
            id: 3,
            title: 'Книга 3',
            author: 'Автор 3',
            genre: 'Жанр 3',
            publisher: 'Издатель 3'
        },
    ];

    return (
        <div>
            <h1>Клиент</h1>
            <div className="book-list">
                {books.map(book => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        genre={book.genre}
                        publisher={book.publisher}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClientPanel;
