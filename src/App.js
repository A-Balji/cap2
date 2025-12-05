
import './App.css';
import Nav from './Nav.js'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

function App() {
  return (
    <>
      <div className='headerPlusNav'>
        <Header></Header>
        <Nav></Nav>
      </div>
      <Main></Main>
      <div className='allFooter'>
      <Footer></Footer>
      </div>

    </>
  );
}

export default App;
