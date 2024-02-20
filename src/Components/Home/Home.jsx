import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./home.module.css";


function Home({ characters, handleCardClick }) {
  return (
    <>
    <div className={styles.mission}>
      <h1 className={styles.heading}>The Mission</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque id diam vel quam elementum pulvinar etiam. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. At in tellus integer feugiat scelerisque varius morbi enim.
      </p>


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
