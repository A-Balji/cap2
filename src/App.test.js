import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingPage from "./BookingsForm";
import { updateTimes, initializeTimes } from "./Main";
import { useState } from "react";

test("app main page", () => {
  render(<App />);
  const element = screen.getByText("Bruschetta");
  expect(element).toBeInTheDocument();
});

/*   TEST NO 1:   Testing to find a static text  */
test("Renders the BookingForm heading.", () => {
  let mockAvTimes = ["12:00", "21:00"];
  let mockFormData = {
    date: today,
    time: ["00:00"],
    guestNum: 1,
    occasion: "",
    slot: "",
    correct: false,
  };
  render(
    <BookingPage
      availableTimes={mockAvTimes}
      dispatch={console.log("dispatch")}
      formData={mockFormData}
      setFormData={console.log("setFormData")}
      submitForm={() => {
        console.log("submitForm");
      }}
    />,
  );
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});

/*  TEST NO 2:    Testing initializeTimes function:  */

let today = new Date();
console.log(JSON.stringify(initializeTimes), " testing initializeTimes");
let result = initializeTimes(today);
test("Check timeslots initialization", () => {
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0); // Passes
});

/*  TEST NO 3:    Testing updateTimes function:  */

console.log(" testing updateTimes");
test("testing how updateTimes function works depending on date of booking (action)", () => {
  expect(updateTimes({}, { date: "2000-04-19" })).toEqual(["error: past date"]);
  expect(Array.isArray(updateTimes({}, "2026-09-19"))).toBe(true);
});
