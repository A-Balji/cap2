import MenuItem from './MenuItem.js'
import items from './specilItemsData.js'


let Specials = function () {
    return (<>
        <section className="menuPart">
            <div className="menuDiv">
                <h2 style={{ marginLeft: '0.4rem' }}>Specials</h2>
                <button className="YellowBtn"
                    style={{ margin: "1.25rem 0.4rem 0rem 0rem" }}
                >Online Menu</button>
            </div>
            <div className="menuBox" style={{
                width: 'auto',
                display: 'block',
                textAlign: 'center',
            }}>
                {items.map((item) => {
                    return (
                        <MenuItem key={item.name + 'element'}
                            pic={item.pic} name={item.name} price={item.price} text={item.text}>
                        </MenuItem>)
                })}
            </div>
        </section>
    </>)
}

export default Specials