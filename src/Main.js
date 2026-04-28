import Home from "./Home.js";
import Menu from "./Menu.js";
import About from "./About.js";
import BookingPage from "./BookingPage.js";
import ConfirmedBooking from "./ConfirmedBooking.js";
import Order from "./Order.js";
import Login from "./Login.js";
import { useReducer, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// imported due to github server issue:
//   "X-Content-Type-Options: nosniff" was given and its Content-Type is not a script MIME type."
// script src='URL' isn't working in index.html as it should be
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

let today = new Date();
console.log(today, " TODAY");

const getDateString = (date1) => {
  let date = new Date(date1);
  const year = date.getFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

let initializeTimes = (date) => {
  return fetchAPI(date);
};
let updateTimes = (state, formData) => {
  // fetch times based on picked date. 1 date adjustment due parsing form string
  let formDate = new Date(formData.date);
  formDate.setDate(formDate.getDate() + 1);
  let nTimeSlots = initializeTimes(formDate);
  console.log(nTimeSlots, " - fetchedTimes", formData.date);
  return nTimeSlots;
};

let Main = () => {
  let Navigate = useNavigate();

  let [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes(today),
  );
  const [formData, setFormData] = useState({
    date: getDateString(today),
    time: "",
    guestNum: 1,
    occasion: "",
    slot: "",
    correct: false,
    errors: {},
  });

  let setterHandler = (formData) => setFormData(formData);

  // after submitting:
  // 1) check if form data is correct
  // 2) record to localStorage
  // 3) redirect to confirmation
  let submitForm = (form) => {
    if (submitAPI(form)) {
      localStorage.setItem(
        `${getDateString(form.date)},${form.time},${form.slot}`,
        `${form.occasion}`,
      );
      Navigate("/confirmed");
      setFormData({
        date: getDateString(today),
        time: "",
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

export { initializeTimes, updateTimes };
export default Main;
