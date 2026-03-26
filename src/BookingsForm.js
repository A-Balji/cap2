import { useState } from 'react'

const today = new Date()

const getTodaysDate = () => {
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
};

let BookingPage = (props) => {
    let [date, setDate] = useState(getTodaysDate())
    let [slot, setSlot] = useState(props.formData.slots[0])
    /*  let today = new Date().toISOString().slice(0, 10); */
    let availableTimes = props.availableTimes
    console.log(availableTimes, ' - availableTimes given')

    let dateChange = (e) => {
        let newData = { ...props.formData }
        setDate(e.target.value)
        newData.date = e.target.value
        props.setFormData(newData)
        props.dispatch(newData.date)
        console.log(e.target.value, newData.date, ' - dispatched')
        console.log(newData, ' - new form data')
    }
    let timeChange = (e) => {
        let newData = { ...props.formData }
        newData.time = e.target.value
        props.setFormData(newData)
    }
    let slotChange = (e) =>{
        let newData = { ...props.formData }
        newData.slot = e.target.value
        props.setFormData(newData)
        setSlot(e.target.value)
    }

    let occasionChange = (e) => {
        let newData = { ...props.formData }
        newData.occasion = e.target.value
        props.setFormData(newData)
    }
    let guestNumChange = (e) => {
        let newData = { ...props.formData }
        newData.guestNum = e.target.value
        props.setFormData(newData)
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        if (props.submitForm(props.formData) === 'Form is valid') {
            console.log('handleSubmit was activated!')
        } else { props.submitForm(props.formData) }
    }

    return (<>
        <div className='bookingPane'>
            <div className='booking'>
                <h1> Reserve a table </h1>
                <div id="form">
                    <form onSubmit={handleSubmit}
                        style={{
                            display: 'grid',
                            maxWidth: '200px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            gap: '20px',
                            padding: '0.5rem',
                            margin: '0.5rem',
                            textAlign: 'center',
                            alignSelf: 'center',
                            borderStyle: 'solid',
                            borderWidth: '0.5px',
                            borderRadius: '1rem'
                        }}>
                        {/* Date input */}
                        <label htmlFor="res-date">Choose date</label>
                        <input
                            type="date"
                            min={getTodaysDate()}
                            id="res-date"
                            name={'date'}
                            onChange={dateChange}
                            value={date}
                        />
                        {/* Time input */}
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time"
                            onChange={timeChange}
                            value={props.formData.time}>
                            <option disabled value=''>Time of arrival</option>
                            {availableTimes.map((item, index) => {
                                return (<option key={index}>{item}</option>)
                            })}
                        </select>
                        {/* Slot input */}
                        <label htmlFor='slots'>Choose available slot</label>
                        <select id='slots'
                            onChange={slotChange}
                            value={slot}>
                            {props.formData.slots.map((item, index)=>{
                                return(<option key={index} value={item}> Slot {item} </option>)
                            })}
                        </select>
                        {/* Guest number input */}
                        <label htmlFor="num-guests">Number of guests</label>
                        <input id="num-guests" type="number" min="1" max="10"
                            placeholder="1" value={props.formData.guestNum} onChange={guestNumChange} />
                        {/* Occasion selection */}
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion"
                            value={props.formData.occasion}
                            onChange={occasionChange}>
                            <option disabled value="">Choose</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        {/* Submit button */}
                        <p style={{ maxWidth: '150px' }}>{props.formMessage}</p>
                        <input type="submit" value="Make Your Reservation"></input>
                    </form>
                </div>
                <div id="rules">
                    <p>
                        <b>Rules and conditions:{JSON.stringify(props.formData)}</b><br />

                        <br /><i>  Reservations & Table Management:&nbsp;</i>
                        Reservations are recommended for parties of 5+. We only seat complete parties to ensure table turnover times.

                        <br /><br /><i> &nbsp;&nbsp; Late Policy:&nbsp;</i>
                        Tables are held for a maximum of 15–20 minutes after the scheduled reservation time before being released. Please contact the restaurant immediately if you are running late.

                        <br /><br /><i> &nbsp;&nbsp;  Cancellation Policy:&nbsp;</i>
                        Cancellations must be made at least 24–48 hours in advance.

                        <br /><br /><i> &nbsp;&nbsp;  No-Show/Late Cancellation Fee:&nbsp;</i>
                        A fee ($25+ per person) may apply to "no-show" reservations or cancellations within the prohibited window.

                        <br /><br /><i> &nbsp;&nbsp;  Dietary & Accessibility:&nbsp;</i>
                        Special requests, dietary restrictions, or highchair requests must be indicated at the time of booking.
                    </p>
                </div>
            </div>
        </div>
    </>)
}

export default BookingPage
