import { useEffect, useState } from "react";

let today = new Date();
const getDateString = (date) => {
  const year = date.getFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

let BookingPage = (props) => {
  let [warningMessages, setWarningMessages] = useState({
    chooseTime: "*",
    chooseOccasion: "*",
    chooseSlot: "*",
    mainMessage: "Please fill all lines",
  });
  // maximum slots at each time
  let maxSlots = 4;
  //  raw timeslots for selected date. for example: '17:00': [1, 2, 3, 4]
  let [timesSlots, setTimesSlots] = useState({});
  // actual slot menu after checking localStorage  for example: '17:00': [2, 4]
  let [filteredSlots, setFilteredSlots] = useState([]);
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
    if (warningMessages.chooseTime !== "*") {
      setFilteredSlots(nTimesSlots[props.formData.time]);
    }
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
  // helper for useEffect to check 3 form lines
  let formCorrectCheck = (form) => {
    if (form.correct === false) {
      console.log("form useEffect triggered");
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
    let nFormData = props.formData;
    nFormData.time = "";
    nFormData.slot = "";
    nFormData.occasion = "";
    let pickedDate = new Date(e.target.value);
    // correct for +1 (TZ 1 day shift), analyse if not past day
    pickedDate.setDate(pickedDate.getDate() + 1);
    if (
      pickedDate.getTime() > today.getTime() ||
      (pickedDate.getFullYear() === today.getFullYear() &&
        pickedDate.getMonth() === today.getMonth() &&
        pickedDate.getDay() === today.getDay())
    ) {
      nFormData.date = e.target.value;
      let nWM = {
        chooseTime: "*",
        chooseOccasion: "*",
        chooseSlot: "*",
        mainMessage: "Please fill all lines",
      };
      setWarningMessages(nWM);
      props.dispatch(nFormData);
      props.setFormData(nFormData);
      setFilteredSlots([]);
      console.log(e.target.value, nFormData.date, " - dispatched");
    } else {
      // if past date somehow was picked
      let nWM = { ...warningMessages };
      nWM.mainMessage = "Wrong date";
      setWarningMessages(nWM);
      setFilteredSlots([]);
      console.log("got wrong here");
    }
  };

  // time change handler
  let timeChange = (e) => {
    let nFData = { ...props.formData };
    nFData.time = e.target.value;
    nFData.slot = "";
    nFData.occasion = "";
    nFData.correct = false;
    props.setFormData(nFData);
    let nMessages = { ...warningMessages };
    nMessages.chooseTime = "";
    nMessages.chooseSlot = "*";
    nMessages.chooseOccasion = "*";
    setWarningMessages(nMessages);
    setFilteredSlots(timesSlots[nFData.time]);
    console.log(nFData.time, " - new time data");
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
          <section id="form">
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
                value={props.formData.date}
              />

              {/* Time input */}
              <label htmlFor="res-time">
                Choose time <b id="red">{warningMessages.chooseTime}</b>
              </label>
              <select
                id="res-time"
                onChange={timeChange}
                value={props.formData.time}
              >
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
              <select
                id="slots"
                onChange={slotChange}
                value={props.formData.slot}
              >
                <option selected disabled value="">
                  Booking slot
                </option>
                if(warningMessages.chooseTime !== '*')
                {filteredSlots.map((item, index) => {
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
                onChange={guestNumChange}
              />

              {/* Occasion selection */}
              <label htmlFor="occasion">
                Occasion <b id="red">{warningMessages.chooseOccasion}</b>
              </label>
              <select
                id="occasion"
                onChange={occasionChange}
                value={props.formData.occasion}
              >
                <option selected disabled value="">
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
          </section>
          <section id="rules">
            <p>
              <b>
                {JSON.stringify(props.formData)}Rules and conditions:
                {filteredSlots}
              </b>
              <br />
              <br />
              <i>
                {" "}
                {JSON.stringify(timesSlots)} - timeSlots&nbsp;&nbsp;
                Reservations and Table Management: &nbsp;
              </i>
              <br />
              Reservations are recommended for parties of 5+. We only seat
              complete parties to ensure table turnover times.
              <br />
              <br />
              <i> &nbsp;&nbsp; Late Policy:&nbsp;</i>
              <br />
              Tables are held for a maximum of 15–20 minutes after the scheduled
              reservation time before being released. Please contact the
              restaurant immediately if you are running late.
              <br />
              <br />
              <i> &nbsp;&nbsp; Cancellation Policy:&nbsp;</i>
              <br />
              Cancellations must be made at least 24 hours in advance. Failure
              to cancel within the time frame (or no-shows) may incur a fee,
              especially for large parties or special events.
              <br />
              <br />
              <i> &nbsp;&nbsp; No-Show/Late Cancellation Fee:&nbsp;</i>
              <br />
              A fee ($25+ per person) may apply to "no-show" reservations or
              cancellations within the prohibited window.
              <br />
              <br />
              <i> &nbsp;&nbsp; Dietary & Accessibility:&nbsp;</i>
              <br />
              Special requests, dietary restrictions, or highchair requests must
              be indicated at the time of booking.
              <br />
              <br />
              <i> &nbsp;&nbsp; Dining Duration:&nbsp;</i>
              <br />
              Dining Duration Tables are assigned a 1.5 to 2-hour dining limit
              based on party size.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
