import Footer from './components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';
import './scss/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage.tsx';
import AboutUs from './pages/about-us/AboutUs.tsx';
import ContactUs from './pages/contact-us/ContactUs.tsx';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy.tsx';
import TermsAndConditions from './pages/terms-conditions/TermsAndConditions.tsx';
import Support from './pages/support/Support.tsx';

function App() {
  return (
    <div className="bg-white h-screen relative">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route index element={<HomePage/>} />
              <Route path='/about-us' element={<AboutUs/>} />
              <Route path='/contact-us' element={<ContactUs/>} />
              <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
              <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />
              <Route path='/support' element={<Support/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
