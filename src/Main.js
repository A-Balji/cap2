import Menu from './Menu.js'
import food1 from "./pics/food1.jpg"
import Review from './Review.js'
import ava1 from "./pics/ava1.jpg"
import ava2 from "./pics/ava2.jpg"
import ava3 from "./pics/ava3.jpg"
import ava4 from "./pics/ava4.jpg"
import chef1 from './pics/chef1.jpg'
import chef2 from './pics/chef2.jpg'
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
            height: '6rem',
            }}></div>
        <section className="menu">
            <div className="menuDiv">
                <h2>Specials</h2>
                <button className="YellowBtn"
                style={{marginTop:'1.35rem'}}
                >Online Menu</button>
            </div>
            <div style={{
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

        <section className="reviews">
            <h1>Testimonials</h1>
            <Review CName="revewOne" rating="5.0" star="star"
                fName="Jeremy" avatar={ava1}>
            </Review>
            <Review CName="revewTwo" rating="5.0" star="star"
                fName="Maddie" avatar={ava2}>
            </Review>
            <Review CName="revewThree" rating="5.0" star="star"
                fName="Naomi" avatar={ava3}>
            </Review>
            <Review CName="revewFour" rating="5.0" star="star"
                fName="Peter" avatar={ava4}>
            </Review>
        </section>



        <section className="about-us" style={{
            backgroundColor: "#FBDABB",
            textAlign: 'center',
        }}>
            <article style={{
                display: 'inline-block',
                maxWidth: '22rem',
                textAlign: 'left',
                marginRight: '10rem',
                marginLeft: '0.5rem'
                }}>
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>
                &nbsp;&nbsp;Chicago's restaurant history began with modest eateries
                for 19th-century workers and travelers, heavily
                influenced by European immigrant cuisines. The city's
                long-standing food scene includes iconic establishments
                like the historic Berghoff restaurant, established in
                1898, and Daley's Restaurant, which opened in 1892.
                Other key milestones include the opening of the first
                restaurant in a department store (Macy's Walnut Room
                in 1907) and the creation of Chicago-born food chains
                like Portillo's and Giordano's.
            </p>
            </article>
            <div style={{
                display: 'inline-block',
                marginBottom: "5rem",
                marginTop: '3rem',
             }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(5rem, 7.5rem))',
                    gridTemplateRows: 'repeat(4, 8rem)',
                }}>
                    <img src={chef2}
                        style={{
                            gridRow: '1/4',
                            gridColumn: '2/4',
                            borderRadius: '15px',
                            maxWidth: '15rem',
                            height: '22rem',
                            borderStyle: 'solid',
                        }}
                    ></img>
                    <img src={chef1}
                        style={{
                            gridRow: '2/5',
                            gridColumn: '1/3',
                            borderRadius: '15px',
                            maxWidth: '15rem',
                            height: '22rem',
                            borderStyle: 'solid',
                        }}></img>
                </div>
            </div>
        </section>
    </>
}

export default Main