import vLogo from "./pics/vLogo.png"

let Footer = function () {
    return <>
        <div className="allFooter">
            <img className="footerLogo" src={vLogo} alt="vertical Lemon logo"></img>
            <ul className="footerCol1">
                <li>Doormat navigation</li>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <ul className="footerCol2">
                <li>Contact</li>
                <li><a href="/address">Address</a></li>
                <li><a href="/phone">phone</a></li>
                <li><a gref="/email">email</a></li>
            </ul>
            <ul className="footerCol3">
                <li>Social media links</li>
                <li><a href="/address">Address</a></li>
                <li><a href="/phone">phone number</a></li>
                <li><a href="/email">email</a></li>
            </ul>
        </div>
    </>
}
export default Footer
