import './../App.css';
const Navbar = () => {
    return (
        <header>
            <div className="logo">
                <span>
                    LIBRARY
                </span>
                <ul className="nav">
                    <li><a href="../AdminPanel.jsx">Админ</a></li>
                    <li><a href="./book.js">библиотекарь</a></li>
                    <li>Кабинет</li>
                </ul>
            </div>
            <div className="presentation"></div>
        </header>
    );
}

export default Navbar;