import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./home.module.css";


function Home({ characters, handleCardClick }) {
  return (
    <>
    <div className={styles.mission}>
      <h1 className={styles.heading}>The Mission</h1>
      <div className={styles.content}>
         <h5>
      Welcome travelers to the Andromeda Space Exploration Team! 
      </h5>
      <p>
      A diverse crew of astronauts, cyborgs, robots, scientists, engineers, aliens, and even a stowaway pirate land on asteroid B-612 and embark on a groundbreaking journey. Our mission? To expand life in the Andromeda Galaxy using the advanced capabilities of the TITAN-5 and ECHO-7 robots. 
      </p>
      <p>
      However, as we venture into the unknown, we encounter a daunting challenge: the TITAN-5 has been compromised. Now, it is up to our team to uncover the culprit among us, unraveling a mystery that threatens not only the success of our mission, but the safety of all aboard our spacecraft. 
      </p>
      <p>
      Together, we must navigate the treacherous depths of space, overcome obstacles, and confront our own suspicions to ensure the continued exploration and prosperity of the Andromeda Galaxy.
      </p>
      </div>
     


    </div>
    
   
    <div>
      <h1 className={styles.heading}>Character Cards</h1>
      <Row>
        {characters.slice(0, 2).map((character) => (
          <Col key={character._id} sm={6} md={6} lg={6} xl={6} className="mb-4">
            <Card
              className={styles.card}
              onClick={() => handleCardClick(character)}
            >
              <Card.Img
                variant="top"
                src={character.image_url}
                className={styles["card-img"]}
              />
              <Card.Body>
                <Card.Title className={styles["card-title"]}>
                  {character.name}
                  
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {characters
        .slice(2)
        .reduce((rows, character, idx) => {
          if (idx % 4 === 0) rows.push([]);
          rows[rows.length - 1].push(character);
          return rows;
        }, [])
        .map((row, idx) => (
          <Row key={idx}>
            {row.map((character) => (
              <Col
                key={character._id}
                sm={6}
                md={3}
                lg={3}
                xl={3}
                className="mb-4"
              >
                <Card
                  className={styles.card}
                  onClick={() => handleCardClick(character)}
                >
                  <Card.Img
                    variant="top"
                    src={character.image_url}
                    className={styles["card-img"]}
                  />
                  <Card.Body>
                    <Card.Title className={styles["card-title"]}>
                      {character.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
    </div>
    </>
  );
}

export default Home;
