import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Explore from './components/Explore/Explore';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
    </div>
  );
}

export default App;
