import React from "react";
import styles from "./costume.module.css";
import { Table } from "react-bootstrap"; 

function Costume({ characters }) {
  return (
    <div>
      <Table  className={styles.costumeTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td className={styles.character}>{character.name}</td>
              <td>
                <a href={character.link1} target="_blank" rel="noopener noreferrer" className={styles.costumeLink}>
                  Costume Link 1
                </a>
              </td>
              <td>
                <a href={character.link2} target="_blank" rel="noopener noreferrer" className={styles.costumeLink}>
                  Costume Link 2
                </a>
              </td>
              <td>
                <a href={character.link3} target="_blank" rel="noopener noreferrer" className={styles.costumeLink}>
                  Costume Link 3
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Costume;
