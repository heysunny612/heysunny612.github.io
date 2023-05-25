import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to='/'>
          C O D I N G <span>MY DREAM</span>
        </Link>
      </h1>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.active}>HOME</li>
          <li>STORY</li>
          <li>SKILLS</li>
          <li>PROJECT</li>
          <li>CV</li>
        </ul>
      </nav>
    </header>
  );
}
