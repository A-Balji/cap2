import logo from './pics/logo.png'

let Nav = function () {
    return <>
        <img src={logo} alt="lemon logo"></img>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/menu">MENU</a></li>
            <li><a href="/reservations">RESERVATIONS</a></li>
            <li><a href="order-online">ORDER ONLINE</a></li>
            <li><a href="/log-in">LOG IN</a></li>
        </ul>
    </>
}

export default Nav