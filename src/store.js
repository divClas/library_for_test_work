
import { createStore, combineReducers } from 'redux';
const initialState = {
    books: [
        { id: 1, title: '«Властелин колец»', author: 'Джон Р. Р. Толкин', genre: 'фантастика', publisher: 'КИНО' },
        { id: 2, title: '«Гордость и предубеждение»', author: 'Джейн Остин', genre: 'экшен', publisher: 'КИНО' },
        { id: 3, title: '«Тёмные начала»', author: 'Филип Пулман', genre: 'коммедия', publisher: 'кот' },
        { id: 4, title: '«Автостопом по галактике»', author: '	Дуглас Адамс', genre: 'фантастика', publisher: 'алея' },
        { id: 5, title: '«Гарри Поттер и Кубок огня»', author: 'Джоан Роулинг', genre: 'фантастика', publisher: 'Теплый' },
        { id: 6, title: '«Убить пересмешника»', author: 'Харпер Ли', genre: 'детектив', publisher: 'Солнце' },
        { id: 7, title: '«Винни Пух»', author: 'Алан Александр Милн', genre: 'повесть', publisher: 'алея' },
        { id: 8, title: '«Война и мир»', author: 'Лев Толстой', genre: 'роман-эпопея', publisher: 'кот' },
    ],
    users: [
        { id: 1, login: 'Пользователь', paswword: "User228", role: 'user' },
        { id: 2, login: 'admin', paswword: "admin", role: 'admin' },
        { id: 3, login: 'library', paswword: "library", role: 'librarian' },
    ],

}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
            };
        case 'EDIT_USER':
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload.updatedUser : user),
            };

        case 'ADD_BOOK':
            return {
                ...state,
                books: [...state.books, action.payload],
            };
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
                isLoggedIn: true,
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: null,
                isLoggedIn: false,
            };
        case 'DELETE_BOOK':
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload),
            };
        default:
            return state;
    }
};
const store = createStore(rootReducer);
export default store;