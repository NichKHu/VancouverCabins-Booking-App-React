import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Explore from './components/Explore/Explore';
import Showcase from './components/Showcase/Showcase';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <Showcase />
    </div>
  );
}

export default App;
