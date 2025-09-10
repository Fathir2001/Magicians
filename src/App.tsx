import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Matches from './components/Matches';
import News from './components/News';
import Gallery from './components/Gallery';
import Trophies from './components/Trophies';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Matches />
      <News />
      <Gallery />
      <Trophies />
      <Sponsors />
      <Contact />
    </div>
  );
}

export default App
