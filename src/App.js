import './App.css';
import Data from './Components/Data';
import Gallery from './Components/Gallery';
import Hero from './Components/Hero';
import Navbar from "./Components/Navbar";



function App() {
  const newArr = Data.map(dataKey => {
    return (
      
        <Gallery 
          coverImg={dataKey.coverImg}
          location={dataKey.location}
          rating={dataKey.stats.rating}
          reviewCount={dataKey.stats.reviewCount}
          title={dataKey.title}
          price={dataKey.price} 
        />
      
      
    )
  }) 
  
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="box-grid">
      {newArr}
      </div>
    </div>
  )
  
}

export default App;
