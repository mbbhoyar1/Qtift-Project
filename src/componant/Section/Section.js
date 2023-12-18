import React from "react";
import "./Section.css";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from '../../componant/Card';
import Carausaldata from '../carausal/Carausaldata';

const Section = ({ data, title, type }) => {
    
    const [carouselToggle, setcarouselToggle] = useState(false);

    const handleToggle = () => {
        setcarouselToggle(prevState => !prevState);
    };

return (
        <div className="mainsection">


            <div className="tophead">
                <h3>{title}</h3>
                <h4 className="toggletext" onClick={handleToggle}>
                    {carouselToggle ? "collaps" : "show all"}
                    
                </h4>
            </div>



            { data.length === 0 
            ? 
            (
                <CircularProgress className="circularprogg" />
            ) 
            :
            carouselToggle ? 
               (
                <div className="wper">
                    {data.map(ele => (
                        <Card key={ele.id} data={ele} type={type} />
                    ))}
                </div>
                ) 
                : 
                (
                <Carausaldata
                    data={data}
                    renderComponant={ele => <Card key={ele.id} data={ele} type={type} />}
                />
                )
            }
        </div>
    );
};

export default Section;


