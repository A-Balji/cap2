import Header from './Header.js'
import Nav from './Nav.js'
import Jumbotrn from'./Jumbotrn.js'
import Specials from './Specials.js'
import Reviews from './Reviews.js'
import Chicago from './Chicago.js'
import Footer from './Footer.js'


let Home = function () {
    return <>
        <div className='headerPlusNav'>
            <Header></Header>
            <Nav></Nav>
        </div>
        <Jumbotrn></Jumbotrn>
        <Specials></Specials>
        <Reviews></Reviews>
        <Chicago></Chicago>
        <Footer></Footer>
    </>
}

export default Home