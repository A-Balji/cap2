import './App.css';
import Header from './Header.js'
import Nav from './Nav.js'
import Footer from './Footer.js'
import Main from './Main.js'
import { BrowserRouter,  } from 'react-router-dom';

/* INFO: 
    
    Step1. Add the following code to your index.html:
<script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>

It's got:

fetchAPI(date) - This function accepts a date as a parameter and returns an array of 
available reservation times for the provided date 

submitAPI(formData) - This function accepts the booking form data as a parameter and 
will return true if the data was successfully submitted.

    Step 2. Update the booking form to display the available times from the API
Update the initializeTimes function that you previously created to use the 
fetchData API function to return the available times for today’s date. 

Tip: You can create a Date object to represent today’s date.

Update the updateTimes function that you previously created to use the fetchData 
API function. Remember, you dispatched the selected date to the updateTimes 
function. This should be passed to the fetchData function as a parameter.

    Step 3. Test the behavior

Run your web app and check that the available times on the booking form change 
when you select a different date.

*/
function App() {
  return (
    <> <BrowserRouter>
            <div className='headerPlusNav'>
            <Header></Header>
            <Nav></Nav>
        </div>
        <Main>
        </Main>
        <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;