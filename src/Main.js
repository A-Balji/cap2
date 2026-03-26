import Home from './Home.js'
import Menu from './Menu.js'
import About from './About.js'
import BookingPage from './BookingPage.js'
import ConfirmedBooking from './ConfirmedBooking.js'
import Order from './Order.js'
import Login from './Login.js'
import { useReducer, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// initialize 
// 1 updateTimes - reducer should process data to:
// a) record booking in a storage
// b) exclude already
//  booked out times if all timeslots taken
//
//


let Main = () => {
    let Navigate = useNavigate()
    let today = new Date()
    
    let updateTimes = (state, formData) => {
        let nTimeSlots = initializeTimes(formData.date)
        console.log(nTimeSlots, ' - fetchedTimes')
        //
        return nTimeSlots
    }
//
    let initializeTimes = (date) => {
        console.log(date, ' - goy it?')
    return fetchAPI(date)
    }
//
    let [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(today))
    let [formMessage, setFormMessage] = useState('Please fill all lines')
    const [formData, setFormData] = useState({
        date: today,
        time: '',
        slots: [1, 2, 3, 4],
        guestNum: 1,
        occasion: '',
        correct: false,
    });
// after submitting: 
// 1) check if form data is correct
// 2) record to localStorage
// 3) redirect to confirmation

    let submitForm = (form) => {
        if(form.slot !== undefined 
            && form.time !== undefined
            && form.occasion !== undefined){
        
        let message = 'please fill'
        recordBooking(form)
        if (form.time.length === 0 || form.occasion.length === 0) {
            message = 'Please set: '
            if (form.time.length === 0) message += 'time of your visit, '
            if (form.occasion.length === 0) message += 'occasion, '
            message += ' and press the button.'
            setFormMessage(message)
            console.log(formData, ' - bad form', form.time.length, form.occasion.length)
        } else {
            if (submitAPI(form)) { Navigate('/confirmed')}
            else { setFormMessage('internalError') }
        }

        }

        console.log(localStorage, ' - local storage')
        return message
    }

    let recordBooking = (form) => {
        localStorage.setItem(`${form}`, 'booked')
    }

    return (<>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/booking" element={<BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                formData={formData}
                setFormData={setFormData}
                submitForm={submitForm}
                
                formMessage={formMessage}
                setFormMessage={setFormMessage} 
            />}></Route>
            <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </>)
}

export default Main