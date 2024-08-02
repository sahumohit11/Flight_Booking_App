import logo from './logo.svg';
import './App.css';
import Topnav from './component/Topnav';
import LandingView from './component/LandingView';




function App() {
  return (
    <div className="App">
      <header>
      <div style={{minHeight:"10vh",width:"100% ",backgroundColor:'rgb(25 118 210 /55%)'}}> </div>
      <Topnav />
      </header>
      

      <div className='main-body'>
      <h1>Welcome to my Booking Site</h1>
      <LandingView />

      </div>

      <footer>
      <div style={{minHeight:"10vh",width:"100% ",backgroundColor:'rgb(25 118 210 /55%)'}}> </div>
      </footer>
    </div>
  );
}

export default App;
