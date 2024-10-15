import Footer from './components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';
import HomePage from './pages/home/HomePage.tsx';
import './scss/main.scss';
import ScrollToTop from './global-components/scroll/scroll-to-top.tsx';

function App() {
  return (
    <div className="bg-white h-screen relative">
      <Header />
      <HomePage />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default App;
