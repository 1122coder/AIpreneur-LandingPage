
import './App.css';
import HomeSection from './Pages/Home';
import Navbar from './Component/Navbar';
import AboutUs from './Pages/About-Us';
import SocialMediaIcons from './Component/SocailMediaIcon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutUs />
      <SocialMediaIcons />
    </div>
  );
}

export default App;
