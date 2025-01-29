import Footer from './components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage.tsx';
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
import Organization from './pages/about-us/organization.tsx';
import Profile from './pages/about-us/Profile.tsx';
import WardsAndZones from './pages/about-us/WardsAndZones.tsx';
import Structure from './pages/about-us/Structure.tsx';
import HistoricalAndReligiousPlaces from './pages/about-us/HistoricalAndReligiousPlaces.tsx';
import Commissioner from './pages/about-us/Commissioner.tsx';
import Introduction from './pages/about-us/Introduction.tsx';
import Mayor from './pages/about-us/Mayor.tsx';
import DeputyMayor from './pages/about-us/DeputyMayor.tsx';
import AdditionalCommissioner from './pages/about-us/AdditionalCommissioner.tsx';
import ListOfHods from './pages/about-us/ListOfHods.tsx';
import Corporators from './pages/about-us/Corporators.tsx';
import ParksList from './pages/about-us/ParksList.tsx';
import RegisterAComplaint from './pages/home/RegisterAComplaint.tsx';
import GmcOfficers from './pages/about-us/GmcOfficers.tsx';
import ExOfficioMembers from './pages/about-us/ExOfficioMembers.tsx';
import CoOption from './pages/about-us/CoOption.tsx';
import UPACell from './pages/departments/upa-cell.tsx';
import Infrastructure from './pages/about-us/Infrastructure.tsx';
import WaterSupply from './pages/departments/water-supply.tsx';
import Horticulture from './pages/departments/Horticulture.tsx';
import ImageAndVideoGallery from './pages/image-and-video-gallery/ImageAndVideoGallery.tsx';
import RtiAct from './pages/rti-act/rti-act.tsx';
import Finance from './pages/departments/revenue/finance.tsx';
import WaterCharges from './pages/departments/revenue/water-charges.tsx';
import LandTax from './pages/departments/revenue/land-tax.tsx';
import Leases from './pages/departments/revenue/leases.tsx';
import TradeLicense from './pages/departments/public-health/trade-license.tsx';

function App() {
  return (
    <div className="bg-white min-h-fit flex flex-col">
      <BrowserRouter>
        <Header />
        <main id='main-content' className="flex-grow overflow-y-auto no-scrollbar">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/about-us' element={<Introduction />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/support' element={<Support />} />
            <Route path='/department/administration' element={<AdministrationAndEducation />} />
            <Route path='/department/revenue' element={<Revenue />} />
            <Route path='/department/accounts' element={<Accounts />} />
            <Route path='/department/town-planning' element={<TownPlanning />} />
            <Route path='/department/engineering' element={<Engineering />} />
            <Route path='/department/public-health' element={<PublicHealth />} />
            <Route path='/about-us/organization' element={<Organization />} />
            <Route path='/about-us/profile' element={<Profile />} />
            <Route path='/about-us/honourable-hods' element={<ListOfHods />} />
            <Route path='/about-us/wards-zones' element={<WardsAndZones />} />
            <Route path='/about-us/structure' element={<Structure />} />
            <Route path='/about-us/religious-places' element={<HistoricalAndReligiousPlaces />} />
            <Route path='/about-us/commissioner' element={<Commissioner />} />
            <Route path='/about-us/mayor' element={<Mayor />} />
            <Route path='/about-us/deputy-mayor' element={<DeputyMayor />} />
            <Route path='/about-us/additional-commissioner' element={<AdditionalCommissioner />} />
            <Route path='/about-us/corporators' element={<Corporators />} />
            <Route path='/about-us/parks' element={<ParksList />} />
            <Route path='/register-complaint' element={<RegisterAComplaint />} />
            <Route path='/about-us/gmc-officers' element={<GmcOfficers />} />
            <Route path='/about-us/ex-officio-members' element={<ExOfficioMembers />} />
            <Route path='/about-us/co-option' element={<CoOption />} />
            <Route path='/department/upa-cell' element={<UPACell />} />
            <Route path='/department/infrastructure' element={<Infrastructure />} />
            <Route path='/department/water-supply' element={<WaterSupply />} />
            <Route path='/department/horticulture' element={< Horticulture/>} />
            <Route path='/department/revenue/water-charges' element={< WaterCharges/>} />
            <Route path='/department/revenue/finance' element={< Finance/>} />
            <Route path='/department/revenue/land-tax' element={< LandTax/>} />
            <Route path='/department/revenue/leases' element={< Leases/>} />
            <Route path='/department/public-health/trade-license' element={<TradeLicense />} />
            {/* <Route path='/department/sanitation' element={<Sanitation />} /> */}
            <Route path='/rti-act' element={<RtiAct />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
