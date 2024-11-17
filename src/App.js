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
import AdministrationAndEducation from './pages/departments/administration-and-education.tsx';
import Revenue from './pages/departments/revenue.tsx';
import Accounts from './pages/departments/accounts.tsx';
import TownPlanning from './pages/departments/town-planning.tsx';
import Engineering from './pages/departments/engineering.tsx';
import PublicHealth from './pages/departments/public-health.tsx';

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <main id='main-content' className="flex-grow overflow-y-auto no-scrollbar">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/support' element={<Support />} />
            <Route path='/department/administration-and-education' element={<AdministrationAndEducation />} />
            <Route path='/department/revenue' element={<Revenue />} />
            <Route path='/department/accounts' element={<Accounts />} />
            <Route path='/department/town-planning' element={<TownPlanning />} />
            <Route path='/department/engineering' element={<Engineering />} />
            <Route path='/department/public-health' element={<PublicHealth />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
