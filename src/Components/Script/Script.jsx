import React from 'react';
import styles from "./script.module.css";


function Script({ character }) {
  // if (!character) return null;

  return (
    <div className={styles.script}>
      <h1>Welcome {character.actor}!</h1>
      <div className={styles.content}>
      <h2>Your Character Script</h2>
      <p>Script: {character.script}</p>


      </div>
    </div>
  );
}

export default Script;
