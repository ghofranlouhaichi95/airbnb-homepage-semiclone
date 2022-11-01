import './App.css';
import Data from './Components/Data';
import Gallery from './Components/Gallery';
import Hero from './Components/Hero';
import Navbar from "./Components/Navbar";



function App() {
  const newArr = Data.map(dataKey => {
    return (
      
        <Gallery 
          key={dataKey.id} /* Unique key */
          /* coverImg={dataKey.coverImg}
          location={dataKey.location}
          rating={dataKey.stats.rating}
          reviewCount={dataKey.stats.reviewCount}
          title={dataKey.title}
          price={dataKey.price} 
          openSpots={dataKey.openSpots} */
          /* dataKey={dataKey} */ /* dataKey is the object with all of the properties from my Data */
          {...dataKey} /* Using Spread Syntax ES6 + remove dataKey from Gallery.JS*/
        />
      
      
    )
  }) 
  
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="box-grid"> {/* Rendering the Gallery Component */}
        {newArr}
      </div>
    </div>
  )
  
}

export default App;
