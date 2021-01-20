import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DevStages from '../DevStages/DevStages';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Projects from '../Projects/Projects';
import Story from '../Story/Story';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header /> 
      <Banner />
      <Story />
      <Offer />
      <Projects />
      <DevStages />
      <Contact />
    </div>
  );
}

export default App;
