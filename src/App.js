
import './App.css';
import HomeSection from './Pages/Home';
import Navbar from './Component/Navbar';
import AboutUs from './Pages/About-Us';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutUs />
    </div>
  );
}

export default App;
