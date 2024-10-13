import Footer from './components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';
import HomePage from './pages/home/HomePage.tsx'
import './scss/main.scss'

function App() {
  return (
    <div className=" bg-white h-screen">
      <Header/>
        <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
