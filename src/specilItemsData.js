import greekPic from './pics/greekS.jpg'
import bruschettaPic from './pics/bruschetta.png'
import lemonPic from './pics/lemonD.jpg'

let items = []
items.push({
    name:'Greek salad',
    price:'$ 12.99',
    pic: greekPic,
    text: `Fresh 
    salad made with tomatoes, cucumbers, red onion, Kalamata 
    olives, and feta cheese, dressed with olive oil and oregano.`,
})
items.push({
    name:'Bruschetta',
    price:'$ 6.99',
    pic: bruschettaPic,
    text: `  Bruschetta is an appetizer of 
    grilled or toasted bread. It is most commonly topped with 
    tomatoes, basil, and salt, though other toppings.`,
})
items.push({
    name: 'Lemon Dessert',
    price: '$ 5.01',
    pic: lemonPic,
    text: `A lemon dessert is a culinary treat 
    that balances bright, zesty, and tangy lemon flavor with 
    a satisfying sweetness.`,
})

export default items