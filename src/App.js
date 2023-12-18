
import React, { useEffect, useState } from 'react';
import Nevbar from './componant/Nevbar';
// import { Hero } from './componant/Hero/Hero';
// import Card from './componant/Card';
import { Outlet } from 'react-router-dom';
import {fetchtopalbum, fetchnewalbum} from '../src/componant/apis/api'
import Carddemo from './componant/democard/Carddemo';



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
  }, []);

  

  const { topAlbum = [], newAlbum = [] } = data || {};

  


  return (
    <>
    <div className="App">
      
      <Nevbar />
      <Outlet  context={{data: {topAlbum, newAlbum}}}/>
      


      {/* // <Hero />
      // <Card /> */}
    </div>
    </>
  );
}
export default App;