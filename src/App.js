
import './App.css';
import HomeSection from './Pages/Home';
import Navbar from './Component/Navbar';
import AboutUs from './Pages/About-Us';
import SocialMediaIcons from './Component/SocailMediaIcon';
import Portfolio from './Pages/Portfolio';
import ContactUsForm from './Pages/SignUppage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutUs />
      <SocialMediaIcons />
      <Portfolio />
      <ContactUsForm />
    </div>
  );
}

export default App;
