//import { Hero } from './componant/Hero/Hero';
import React from 'react';
import Hero from '../../Hero/Hero';
import Section from '../../Section/Section';
import { useEffect, useState } from 'react';
import { fetchtopalbum, fetchnewalbum } from '../../apis/api';
import { useOutletContext } from 'react-router-dom';


const Homepage = () => {

  const { data }= useOutletContext()||{}

  const {newAlbum, topAlbum} = data;

  console.log("DATAKABAP" , data );


  return (
       <>
         <Hero />
         <Section data={topAlbum} title="Top album" type="album" />
         <Section data={newAlbum} title="New album" type="album" />
       </>
     );
   };
   
   export default Homepage;