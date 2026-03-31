import Home from "./Home.js";
import Menu from "./Menu.js";
import About from "./About.js";
import BookingPage from "./BookingPage.js";
import ConfirmedBooking from "./ConfirmedBooking.js";
import Order from "./Order.js";
import Login from "./Login.js";
import { useReducer, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// initialize
// 1 updateTimes - reducer should process data to:
// a) record booking in a storage
// b) exclude already
//  booked out times if all timeslots taken
//

const getDateString = (date1) => {
  let date = new Date(date1);
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  console.log(date1, day, " - formdate sent to gds()");

  return `${year}-${month}-${day}`;
};

let Main = () => {
  let Navigate = useNavigate();
  let today = new Date();

  let updateTimes = (state, formData) => {
    // 1. fetch times based on picked date
    // 2. Block slots that were booked out (in localStorage)
    let nTimeSlots = initializeTimes(new Date(formData.date));
    console.log(nTimeSlots, " - fetchedTimes");

    return nTimeSlots;
  };

  let initializeTimes = (date) => fetchAPI(date);

  let [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes(today),
  );
  const [formData, setFormData] = useState({
    date: today,
    time: "",
    slots: [1, 2, 3, 4],
    guestNum: 1,
    occasion: "",
    slot: "",
    correct: false,
  });
  // after submitting:
  // 1) check if form data is correct
  // 2) record to localStorage
  // 3) redirect to confirmation

  let submitForm = (form) => {
    if (submitAPI(form)) {
      recordBooking(form);
      Navigate("/confirmed");
      setFormData({
        date: today,
        time: "",
        slots: [1, 2, 3, 4],
        guestNum: 1,
        occasion: "",
        slot: "",
        correct: false,
      });
    } else {
      let nForm = { ...form };
      nForm.message = "False return from API";
      setFormData(nForm);
    }
  };

  let recordBooking = (form) => {
    let dateString = getDateString(form.date);
    console.log(dateString, " - dateString");
    localStorage.setItem(`${dateString},${form.time}`, {
      slot: form.slot,
      occasion: form.occasion,
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              formData={formData}
              setFormData={setFormData}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default Main;
