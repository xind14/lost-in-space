// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import styles from './description.module.css';

// function Description({ characters }) {
//   return (
//     <div className={styles.backgroundContainer}>
//       <Carousel style={{ padding: '10px', maxWidth: '50%', margin: 'auto',marginTop:'1em', }}>
//         {characters.map((character, index) => (
//           <Carousel.Item key={index}  >
//           <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px',marginTop:'30px'}}>
//               <img src={character.image_url} className="card-img-top" alt={character.name} />
//               <div className="card-body">
//                 <h2 style={{ marginBottom: '2rem',color: 'white' }}>{character.name}</h2>  
//                 <h5 style={{ marginBottom: '2rem',color: 'white' }}>{character.type}</h5>                
              
//                 <p style={{ marginBottom: '3rem', color: 'white', fontSize:'1rem' }}>{character.description}</p>
//               </div>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default Description; 

import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './description.module.css';

function Description({ characters }) {
  return (
    <div className={styles.backgroundContainer}>
      <Carousel className={styles.carousel}>
        {characters.map((character, index) => (
          <Carousel.Item key={index} className={styles.carouselItem}>
            <div>
              <img src={character.image_url} className={styles.characterImage} alt={character.name} />
              <div className="card-body">
                <h2 className={styles.characterName}>{character.name}</h2>
                <h5 className={styles.characterType}>{character.type}</h5>
                <p className={styles.characterDescription}>{character.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Description;
