import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from'./BookingsForm'
import { updateTimes, initializeTimes } from './Main';


test('app main page', () => {
  render(<App />);
  const element = screen.getByText('Bruschetta');
  expect(element).toBeInTheDocument();
});

/*   TEST NO 1:   Testing to find a static text  */ 
test('Renders the BookingForm heading.', ()=>{
  let mockAvTimes = ['12:00', '21:00']
  let mockDispatch = jest.fn()

  render(<BookingPage availableTimes={mockAvTimes} dispatch={mockDispatch}/>);
  const headingElement = screen.getByText('Reserve a table')
  expect(headingElement).toBeInTheDocument();
})

/*  TEST NO 2:    Testing initializeTimes function:  */

let today = new Date()
console.log(' testing initializeTimes')
let result = initializeTimes(today)
test('Check timeslots initialization', ()=>{
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0); // Passes
})

/*  TEST NO 3:    Testing updateTimes function:  */

console.log(' testing updateTimes')
test('testing how updateTimes function works depending on date of booking (action)',
  ()=>{
    expect(updateTimes({}, today)).toEqual(['booked out for today'])
    expect(updateTimes({}, '2000-04-19')).toEqual(['error: past date'])
    expect(updateTimes({}, '2026-05-19')).toEqual(timesExample)
})


