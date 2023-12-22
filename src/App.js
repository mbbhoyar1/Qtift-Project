
import React, { useEffect, useState } from 'react';
import Nevbar from './componant/Nevbar';
// import { Hero } from './componant/Hero/Hero';
// import Card from './componant/Card';
import { Outlet } from 'react-router-dom';
import {fetchtopalbum, fetchnewalbum, fetchgenres} from '../src/componant/apis/api'
import {fetchsong}  from '../src/componant/apis/api'




function App() {

 
  const [data, setData] = useState();

  const generateData = (key, source) => {
    source().then((responseData) => {
      setData((prevState) => {
        return { ...prevState, [key]: responseData };
      });
    });
  };

  useEffect(()=>{

    generateData("topAlbum", fetchtopalbum);
    generateData("newAlbum", fetchnewalbum);
    generateData("mbb", fetchsong);
    generateData("genre", fetchgenres);
  
  

  }, []);

  

  const { topAlbum = [], newAlbum = [], mbb = [] } = data || {};

  


  return (
    <>
    <div className="App">
      
      <Nevbar />
      <Outlet  context={{data: {topAlbum, newAlbum, mbb}}}/>
      


      {/* // <Hero />
      // <Card /> */}
    </div>
    </>
  );
}
export default App;