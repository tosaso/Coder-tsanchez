import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


function Navbar() {
    return(
        <header id="navbar">
            <h1 id="tittle">Codercoin</h1>
            <ul className="{classes.root}">
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
            <ShoppingCartOutlinedIcon className="cart-icon"/>
        </header>
    );
}

export default Navbar;