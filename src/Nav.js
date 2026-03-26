import { Link } from "react-router-dom"

let Nav = function () {
    return <>
        <ul className="allNav">
            <li><Link to="/" role="button">Home</Link></li>
            <li><Link to="/about" role="button">About</Link></li>
            <li><Link to="/menu" role="button">Menu</Link></li>
            <li><Link to="/booking" role="button">Reservations</Link></li>
            <li><Link to="/order" role="button">Order online</Link></li>
            <li><Link to="/login" role="button">Login</Link></li>
        </ul>
    </>
}
export default Nav