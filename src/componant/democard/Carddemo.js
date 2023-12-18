import "./carddemo.css";
import { Tooltip, Chip } from "@mui/material";
import songdemoimg from "../../assest/songdemoimg.png" 

const Carddemo = ({ data, type }) => {




        return (
          <div className="wrapper">
          <Tooltip title= "34 songs" placement="top" arrow>
            
            
                <div className="card">
                  <img
                    alt="album"
                    src={songdemoimg}
                    loading="lazy"
                  />
                  <div className="banner">
                    <Chip label="100 follows"
                         size="small"
                         className="chip"
                     />
                  </div>
                </div>
                  
                    <p className="label">tithai hai le</p>
                  
                
                </Tooltip>
                
              </div>
          
          
        );

      };
      

export default Carddemo;
