import CustomerSay from './CustomerSay.js'
import reviews from './reviewsData.js'


let Reviews = function () {
  let reviewsCSS = {
    textAlign: 'center',
    maxWidth: '50rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '6rem',
    paddingBottom: '10rem'
  }
   let h1CSS = {
    textAlign: 'center',
    color: '#F4CE14',
    marginBottom: '7rem',
  }
    return (<>
        <div style={{backgroundColor: '#495E57'}}>
            <section className="reviews" style={reviewsCSS}>
                <h1 style={h1CSS}>Testimonials</h1>
                {
                    reviews.map((item)=>{
                        return(
                        <CustomerSay key={item.name}
                        rating={item.rating} fName={item.name} avatar={item.avatar}
                        ></CustomerSay>
                    )
                    })
                }
            </section>
        </div>
    </>)
}

export default Reviews