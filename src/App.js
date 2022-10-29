import './App.css';
import Gallery from './Components/Gallery';
import Hero from './Components/Hero';
import Navbar from "./Components/Navbar";




function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="box-grid">
        <Gallery 
          p1="Life lessons with Katie Zaferes"
          price="136"
        /> 
        <Gallery 
          p1="Learn wedding photography"
          price="125"
        />    
        <Gallery 
          p1="Group Mountain Biking"
          price="50"
        />   
      </div>
    </div>
  );
}

export default App;
