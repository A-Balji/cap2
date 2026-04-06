import { useEffect, useState } from "react";

const today = new Date();

const getDateString = (date) => {
  const year = date.getFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

let BookingPage = (props) => {
  let [date, setDate] = useState(getDateString(today));
  let [warningMessages, setWarningMessages] = useState({
    chooseTime: "*",
    chooseOccasion: "*",
    chooseSlot: "*",
    mainMessage: "Please fill all lines",
  });
  console.log(props.availableTimes, " - availableTimes given");

  let maxSlots = 4;
  //  times and slots for selected date
  let [timesSlots, setTimesSlots] = useState({});
  // actual slot menu for selected date + selected time
  let [dropDownSlots, setDropDownSlots] = useState([]);
  // filter booked out slots:
  useEffect(() => {
    let nTimesSlots = {};
    for (let k = 0; k < props.availableTimes.length; k++) {
      let filteredSlots = [];
      for (let i = 1; i < maxSlots + 1; i++) {
        let localStorageKey = `${getDateString(new Date(props.formData.date))},${props.availableTimes[k]},${i}`;
        if (!localStorage[localStorageKey]) {
          filteredSlots.push(i);
        }
      }
      nTimesSlots[props.availableTimes[k]] = filteredSlots;
      filteredSlots = [];
    }
    for (let key in nTimesSlots) {
      if (nTimesSlots[key] === [])
        props.availableTimes.filter((item) => item !== parseInt(key));
    }
    setTimesSlots(nTimesSlots);
    setDropDownSlots(nTimesSlots[props.formData.time]);
  }, [props.availableTimes]);
  // check if required fields clicked:
  useEffect(() => {
    formCorrectCheck(props.formData);
    if (props.formData.message === "False return from API") {
      let nWM = { ...warningMessages };
      nWM.mainMessage = "Server error";
      setWarningMessages(nWM);
    }
  }, [props.formData]);

  let formCorrectCheck = (form) => {
    if (form.correct === false) {
      console.log("form useEffect triggered");
      // analyze if all fields are filled
      if (form.time && form.occasion && form.slot) {
        let nForm = { ...form };
        nForm.correct = true;
        props.setFormData(nForm);
        let nWM = { ...warningMessages };
        nWM.mainMessage = "Ready to go!";
        setWarningMessages(nWM);
      }
    }
  };

  // form event handlers:
  let dateChange = (e) => {
    let newData = { ...props.formData };
    setDate(e.target.value);
    newData.date = e.target.value;
    props.setFormData(newData);
    props.dispatch(newData);

    console.log(e.target.value, newData.date, " - dispatched");
    console.log(newData, " - new form data");
  };
  let timeChange = (e) => {
    let newData = { ...props.formData };
    newData.time = e.target.value;
    props.setFormData(newData);
    let nMessages = { ...warningMessages };
    nMessages.chooseTime = "";
    setWarningMessages(nMessages);
    setDropDownSlots(timesSlots[newData.time]);
    console.log(newData.time, " - new time data");
  };
  let slotChange = (e) => {
    let newData = { ...props.formData };
    newData.slot = e.target.value;
    props.setFormData(newData);
    let nMessages = { ...warningMessages };
    nMessages.chooseSlot = "";
    setWarningMessages(nMessages);
  };
  let occasionChange = (e) => {
    let newData = { ...props.formData };
    newData.occasion = e.target.value;
    props.setFormData(newData);
    let nMessages = { ...warningMessages };
    nMessages.chooseOccasion = "";
    setWarningMessages(nMessages);
  };
  let guestNumChange = (e) => {
    let newData = { ...props.formData };
    newData.guestNum = e.target.value;
    props.setFormData(newData);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit was clicked!");
    if (props.formData.correct === true) props.submitForm(props.formData);
  };

  return (
    <>
      <div className="bookingPane">
        <div className="booking">
          <h1> Reserve a table </h1>
          <div id="form">
            <form
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                maxWidth: "200px",
                marginLeft: "auto",
                marginRight: "auto",
                gap: "20px",
                padding: "0.5rem",
                margin: "0.5rem",
                textAlign: "center",
                alignSelf: "center",
                borderStyle: "solid",
                borderWidth: "0.5px",
                borderRadius: "1rem",
              }}
            >
              {/* Date input */}
              <label htmlFor="res-date">Choose date</label>
              <input
                type="date"
                min={getDateString(today)}
                id="res-date"
                name={"date"}
                onChange={dateChange}
                value={date}
              />
              {/* Time input */}
              <label htmlFor="res-time">
                Choose time <b id="red">{warningMessages.chooseTime}</b>
              </label>
              <select id="res-time" onChange={timeChange}>
                <option value="" selected disabled>
                  Time of arrival
                </option>
                {props.availableTimes.map((item, index) => {
                  // lets block times that have no slots available:
                  if (timesSlots[item]) {
                    if (timesSlots[item].length === 0) {
                    } else {
                      return (
                        <option key={index} value={props.availableTimes[index]}>
                          {item}
                        </option>
                      );
                    }
                  }
                })}
              </select>
              {/* Slot input */}
              <label htmlFor="slots">
                Pick available slot <b id="red">{warningMessages.chooseSlot}</b>
              </label>
              <select id="slots" onChange={slotChange}>
                <option selected disabled value="">
                  Booking slot
                </option>
                {dropDownSlots.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {" "}
                      Slot {item}{" "}
                    </option>
                  );
                })}
              </select>
              {/* Guest number input */}
              <label htmlFor="num-guests">Number of guests</label>
              <input
                id="num-guests"
                type="number"
                min="1"
                max="10"
                placeholder="1"
                value={props.formData.guestNum}
                onChange={guestNumChange}
              />
              {/* Occasion selection */}
              <label htmlFor="occasion">
                Occasion <b id="red">{warningMessages.chooseOccasion}</b>
              </label>
              <select
                id="occasion"
                value={props.formData.occasion}
                onChange={occasionChange}
              >
                <option disabled value="">
                  Choose
                </option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              {/* Submit button */}
              <b>{warningMessages.mainMessage}</b>
              <input
                type="submit"
                value="Make Your Reservation"
                disabled={!props.formData.correct}
              ></input>
            </form>
          </div>
          <div id="rules">
            <p>
              <b>Rules and conditions:{JSON.stringify(props.formData)}</b>
              <br />
              <br />
              <i>
                {" "}
                {JSON.stringify(timesSlots)}Reservations & Table
                Management:&nbsp;
              </i>
              Reservations are recommended for parties of 5+. We only seat
              complete parties to ensure table turnover times.
              <br />
              <br />
              <i> &nbsp;&nbsp; Late Policy:&nbsp;</i>
              Tables are held for a maximum of 15–20 minutes after the scheduled
              reservation time before being released. Please contact the
              restaurant immediately if you are running late.
              <br />
              <br />
              <i> &nbsp;&nbsp; Cancellation Policy:&nbsp;</i>
              Cancellations must be made at least 24–48 hours in advance.
              <br />
              <br />
              <i> &nbsp;&nbsp; No-Show/Late Cancellation Fee:&nbsp;</i>
              A fee ($25+ per person) may apply to "no-show" reservations or
              cancellations within the prohibited window.
              <br />
              <br />
              <i> &nbsp;&nbsp; Dietary & Accessibility:&nbsp;</i>
              Special requests, dietary restrictions, or highchair requests must
              be indicated at the time of booking.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
