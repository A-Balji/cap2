let Import = function(props){
    let styles = {
        display: 'inline-block',
        backgroundColor: "rgb(237, 239, 238)",
        padding: "0.8rem",
        margin: "0.4rem",
        height: "10rem",
        width: "10rem",
        borderRadius: "15px",
        textAlign: 'left',
    }
    let avaAlt = props.fName + "'s avatar"
    return (<>
        <div className={props.CName} style = {styles}>
            <p>Rating &nbsp;&nbsp;{props.rating}&nbsp;&nbsp;⭐</p> 
            <img src={props.avatar} height="60px" width="60px"
            style={{
                borderRadius: "8px",
                verticalAlign: 'middle',
            }}
            alt={avaAlt}
            ></img>
            <p style={{display: 'inline',}}>
                &nbsp;&nbsp;{props.fName}
            </p>
            <p style={{fontSize:"1rem"}}>Review sent</p>
        </div>
    </>)
}

export default Import