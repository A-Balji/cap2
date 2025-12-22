import Menu from './Menu.js'
import Header from './Header.js'
import Nav from './Nav.js'
import Footer from './Footer.js'
import About from './About.js'
import food1 from "./pics/food1.jpg"
import CustomerSay from './CustomerSay.js'
import ava1 from "./pics/ava1.jpg"
import ava2 from "./pics/ava2.jpg"
import ava3 from "./pics/ava3.jpg"
import ava4 from "./pics/ava4.jpg"

import greekS from './pics/greekS.jpg'
import bruschetta from './pics/bruschetta.png'
import lemonD from './pics/lemonD.jpg'



let Main = function () {
    let greekSText =  `Fresh 
    salad made with tomatoes, cucumbers, red onion, Kalamata 
    olives, and feta cheese, dressed with olive oil and oregano.`

    let bruschettaText = `  Bruschetta is an appetizer of 
    grilled or toasted bread. It is most commonly topped with 
    tomatoes, basil, and salt, though other toppings.`

    let lemonDText = `  A lemon dessert is a culinary treat 
    that balances bright, zesty, and tangy lemon flavor with 
    a satisfying sweetness. `

    return <>
        <div className='headerPlusNav'>
            <Header></Header>
            <Nav></Nav>
        </div>
        <div className="introPane">
        <section className="intro">
            <article>
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>
                Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.
                It has been the industry's standard
            </p>
            <button className="YellowBtn"> Start Free Trial </button>
            </article>
            <img src={food1}>
            </img>
        </section>
        </div>

        <div style={{
            backgrounColor: '#EDEFEE',
            height: '3rem',
            }}></div>
        <section className="menu">
            <div className="menuDiv">
                <h2>Specials</h2>
                <button className="YellowBtn"
                style={{marginTop:'1.35rem'}}
                >Online Menu</button>
            </div>
            <div className="menuBox"style={{
                width: 'auto', 
                display: 'block', 
                textAlign: 'center',
                }}>
                <Menu pic={greekS} name={"Greek salad"} 
                    price={'$ 12.99'} text={greekSText}>
                </Menu>
                <Menu pic={bruschetta} name={"Bruschetta"} 
                    price={'$ 6.99'} text={bruschettaText}>
                </Menu>
                <Menu pic={lemonD} name={"Lemon Dessert"} 
                    price={'$ 5.00'} text={lemonDText}>
                </Menu>
            </div>
        </section>

        <div className='reviewPane'>
        <section className="reviews">
            <h1>Testimonials</h1>
            <CustomerSay CName="revewOne" rating="5.0" star="star"
                fName="Jeremy" avatar={ava1}>
            </CustomerSay>
            <CustomerSay CName="revewTwo" rating="5.0" star="star"
                fName="Maddie" avatar={ava2}>
            </CustomerSay>
            <CustomerSay CName="revewThree" rating="5.0" star="star"
                fName="Naomi" avatar={ava3}>
            </CustomerSay>
            <CustomerSay CName="revewFour" rating="5.0" star="star"
                fName="Peter" avatar={ava4}>
            </CustomerSay>
        </section>
        </div>
        
        <About></About>

        <div className='allFooter'>
            <Footer></Footer>
        </div>
    </>
}

export default Main