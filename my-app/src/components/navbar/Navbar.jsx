import './navbar.css'


function Navbar() {
    return(
        <header id="navbar">
            <h1 id="tittle">Codercoin</h1>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </header>
    );
}

export default Navbar;