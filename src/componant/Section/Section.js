import React from "react";
// import "./Section.css";
import styles from "./Section.module.css";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../../componant/Card";
import Carausaldata from "../carausal/Carausaldata";
import Filters from "../../componant/Filter/Filters";

export default function Section({title,data,filterSource,type}){
    const [filters,setFilters]=useState([{key:'all',label:'All'}])
    const [selectedFilterIndex,setSelectedFilterIndex]=useState(0)
    // console.log('carouselToggle:', carouselToggle);
//   console.log('data length:', data.length);
    const [carouselToggle,setcarouselToggle]=useState(false);

    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                const {data} =response;
                setFilters([...filters,...data])
            })
        }
    },[])

    const showFilters=filters.length >1;

    const cardsToRender = data.filter((card)=>
      showFilters && selectedFilterIndex !==0
      ?card.genre.key===filters[selectedFilterIndex].key:card
    );
    console.log(cardsToRender)

      

    const handleToggle = () => {
        setcarouselToggle((prevState) => !prevState);
      };
   return (
    <div className={styles.sectionwrapper}>
        <div className={styles.tophead}>
            <h3>{title}</h3>
            <h4  className={styles.toggleText} onClick={handleToggle}> 
              {/* {!carouselToggle ? 'Collapse All':'Show All'} */}
              {!carouselToggle ? 'Show All':'Collapse All'}
             </h4>
        </div>
        {showFilters &&(
            <div className={styles.filterWrapper}>
              <Filters
                filters={filters}
                selectedFilterIndex={selectedFilterIndex}
                setSelectedFilterIndex={setSelectedFilterIndex}
             />
             </div>
        )}
       {data.length === 0 ? (
        <CircularProgress className="circularprogg" />
      ) : carouselToggle ? (
        <div className={styles.wrapper}>
          {cardsToRender.map((ele) => (
            <Card key={ele.id} data={ele} type={type} />
          ))}
        </div>
      ) : (
        <Carausaldata
          data={cardsToRender}
          renderComponant={(ele) => (
            <Card key={ele.id} data={ele} type={type} />
          )}
        />
        

      )}
    </div>
   )
}