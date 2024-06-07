import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Roofing from './pages/Roofing';
import Solar from './pages/Solar';
import Batteries from './pages/Batteries';
import WhyTrinity from './pages/WhyTrinity';
import CommunityPartners from './pages/CommunityPartners';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/roofing" element={<Roofing />} />
          <Route path="/batteries" element={<Batteries />} />
          <Route path="/why-trinity" element={<WhyTrinity />} />
          <Route path="/community-partners" element={<CommunityPartners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
