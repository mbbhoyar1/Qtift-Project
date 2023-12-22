//import { Hero } from './componant/Hero/Hero';
import React from 'react';
import Hero from '../../Hero/Hero';
import Section from '../../Section/Section';
import { fetchgenres } from '../../apis/api';


import { useOutletContext } from 'react-router-dom';




const Homepage = () => {

  const { data }= useOutletContext()||{}

  const {newAlbum, topAlbum, mbb, genre} = data;

  console.log("DATAKABAP" , data );
  
  



  return (
    <>
      <Hero />

      <div className="sectionwrapper">
        <Section data={topAlbum} title="Top album" type="album" />
        <Section data={newAlbum} title="New album" type="album" />
        <div
          style={{
            background: "#34C94B",
            maxWidth:"100%" ,
            height: "1.5px",
            marginTop: "25px",
            marginBottom: "15px"
          }}
        ></div>

        <Section
          data={mbb}
          title="Songs"
          type="song"
          filterSource={fetchgenres}
        />
      </div>
      <div></div>
    </>
  );
   };
   
   export default Homepage;