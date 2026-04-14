import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import BookingPage from "./BookingsForm";
import { updateTimes, initializeTimes } from "./Main";

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
    time: ["12:00"],
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
test("Testing initializeTimes", () => {
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0); // Passes
});

/*  TEST NO 3:    Testing updateTimes function:  */

console.log(" testing updateTimes");
test("testing how updateTimes function works depending on date of booking (action)", () => {
  expect(updateTimes({}, { date: "2000-04-19" })).toEqual(["error: past date"]);
  expect(Array.isArray(updateTimes({}, "2026-09-19"))).toBe(true);
});

/*  TEST NO 4:    Testing booking forms right attributes:  */

test("Form fields attributes", () => {
  let mockAvTimes = ["12:00", "21:00"];
  let mockFormData = {
    date: today,
    time: ["12:00"],
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
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("min");
  expect(dateInput).toHaveAttribute("value");
  // wrong:
  fireEvent.change(dateInput, { target: { value: "1999-12-12" } });

  // right:
  fireEvent.change(dateInput, { target: { value: "2026-06-12" } });

  const timeSelection = screen.getByLabelText("Choose time *");
  expect(timeSelection).toHaveAttribute("id", "res-time");

  const slotSelection = screen.getByLabelText("Pick available slot *");
  expect(slotSelection).toHaveValue("");
  expect(slotSelection).toHaveAttribute("id");

  const numGuestsInput = screen.getByLabelText("Number of guests");
  expect(numGuestsInput).toHaveAttribute("min", "1");
  expect(numGuestsInput).toHaveAttribute("max", "10");
  expect(numGuestsInput).toHaveAttribute("type", "number");

  const occasionSelection = screen.getByLabelText("Occasion *");
  expect(occasionSelection).toHaveValue("");
  expect(occasionSelection).toHaveAttribute("id");
});
