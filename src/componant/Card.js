import "./card.css";
import { Tooltip, Chip } from "@mui/material";

const Card = ({ data, type }) => {


  const getCard= (type) => {
    
  switch(type){
      case "album":{
        const { image, slug, title, songs, follows } = data;

        return (  
      
          <div className="card_wrapper">     
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <a href={`/album/${slug}`}>
                                                               
                                                 
              <div className="card">
                <img
                  
                  alt="album"
                  src={image}
                  loading="lazy"
                  style={{ height: '170px', width: '159px' }}
                />
                <div className="banner">
                  <Chip label={`${follows} Follows`}
                       size="small"
                       className="chip"
                   />
                </div>
                
                  
                
              </div>

              <p className="label">{title}</p>
              
            
          </a>
        </Tooltip>
        </div>
      
        );

      }
       case "song":{

        const { image,  title, likes } = data;

        return (
         
           
              <div className="wrapper">
                <div className="card">
                  <img
                    alt="album"
                    src={image}
                    loading="lazy"
                  />
                  <div className="banner">
                    <Chip label={`${likes} Likes`}
                         size="small"
                         className="pill"
                     />
                  </div>
                  <div className="titlewrap"> 
                    <p>{title}</p>
                  </div>
                </div>
                {/* Incomplete structure: Adding a closing div */}
              </div>
         
        );



        
       }
       default:
        return <></>;
    }
  
  }
  return getCard(type)
  
 
};

export default Card;

////////////////////////////////
// import React from 'react'
// import styles from "./Card.module.css"
// import {Chip, Tooltip} from '@mui/material'

// const Card = ({data,type}) => {

//   const getCard = (type) => {
//     switch(type) {
//       case "album" : {
//         const {image,follows,title,songs} = data;
//         return (
//           <Tooltip title={`${songs?.length} songs`} placement='top' arrow>
//           <div className={styles.wrapper}>
//             <div className={styles.card}>
//               <img src={image} alt='album'/>
//               <div className={styles.banner}>
//                 <Chip label={`${follows} Follows`} className={styles.chip} size="small"/>
//               </div>
//             </div>
//             <div className={styles.titleWrapper}>
//               <p>{title}</p>
//             </div>
//           </div>
//           </Tooltip>
//         )
//       }
//       case "song" : {
//         const {image,likes,title,songs} = data;
//         return (
//           <Tooltip title={`${songs?.length} songs`} placement='top' arrow>
//           <div className={styles.wrapper}>
//             <div className={styles.card}>
//               <img src={image} alt='song' loading='lazy' />
//               <div className={styles.banner}>
//                 <div className={styles.pill}>
//                   <p>{likes} Likes</p>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.titleWrapper}>
//               <p>{title}</p>
//             </div>
//           </div>
//           </Tooltip>
//         )
//       }
//       case 'songFilter' : {
//         const {image,likes,title} = data;
//         return (
//         <div className={styles.wrapper}>
//             <div className={styles.card}>
//               <img src={image} alt='song' loading='lazy' />
//               <div className={styles.banner}>
//                 <div className={styles.pill}>
//                   <p>{likes} Likes</p>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.titleWrapper}>
//               <p>{title}</p>
//             </div>
//           </div>
                    
//         )
//       }
//       default:
//         return <></>
//     } 
//   }
//   return getCard(type)
// }

// export default Cardv