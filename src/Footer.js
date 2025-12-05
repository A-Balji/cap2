import vLogo from "./pics/vLogo.png"


let Footer = function () {
    return <>
        <div className="footer">
            <img className="footCol1" src={vLogo} alt="vertical Lemon logo"
                height="300pt" width="120pt">

            </img>
            <div className="footCol2">
                <p>Doormat navigation</p>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>

            <div className="footCol3">
                <p>Contact</p>
                <ul>
                    <li><a href="/address">Address</a></li>
                    <li><a href="/phone">phone</a></li>
                    <li><a gref="/email">email</a></li>
                </ul>
            </div>
            <div className="footCol4">
                <p>Social media links</p>
                <ul>
                    <li><a href="/address">Address</a></li>
                    <li><a href="/phone">phone number</a></li>
                    <li><a href="/email">email</a></li>
                </ul>
            </div>
        </div>
    </>
}
export default Footer
