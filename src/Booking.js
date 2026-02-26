import Header from './Header.js'
import Nav from './Nav.js'
import Footer from './Footer.js'


let Booking = () => {
    return(<>
        <div className='headerPlusNav'>
            <Header></Header>
            <Nav></Nav>
        </div>

        <div >
            <h1> Reserve a table </h1>
        </div>

        <Footer></Footer>
    </>)
}

export default Booking