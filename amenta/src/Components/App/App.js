import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Projects from '../Projects/Projects';
import Story from '../Story/Story';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header /> 
      <Banner />
      <Story />
      <Offer />
      <Projects />
    </div>
  );
}

export default App;
