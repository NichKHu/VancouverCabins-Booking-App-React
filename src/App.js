import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Explore from './components/Explore/Explore';
import Showcase from './components/Showcase/Showcase';
import End from './components/End/End';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <Showcase />
      <End />
    </div>
  );
}

export default App;
