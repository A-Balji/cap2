import bikePic from'./pics/bikePic.png'


let MenuItem = function(props){
    let style = {
        display: 'inline-block',
        borderStyle: 'solid',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        width: '15.5rem',
        height: '31rem',
        backgroundColor: '#C2BFBF',
        margin: '0.35rem',
        verticalAlign: 'middle',
        textAlign: 'left',
    }

    return(<>
        <div style={style}>
            <img src={props.pic} width="200px" alt={props.name}
            style={{
                width: '15.5rem',
                height: '15rem',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',

            }}>
            </img>
            <div style={{
                paddingLeft: '0.4rem',
                paddingRight: '0.4rem',
                height: '12rem',
                width: '14.5rem',
                fontSize: '1.1rem',
            }}>
                <h4>{props.name}<strong style={{
                    float: 'right',
                    color: '#EE9972'
                    }}>{props.price}</strong>
                </h4>
                <p>&nbsp;&nbsp;{props.text}</p>
                <p style={{display: 'inline-block',float: 'bottom',}}><strong>Order delivery</strong>
                <img src={bikePic} alt="bike_icon" 
                style={{
                    height: '25px',
                    wigth: '25px',
                    paddingLeft: '1rem',
                    verticalAlign: 'middle'
                    }}></img></p>
            </div>
        </div>
    </>)
}

export default MenuItem;