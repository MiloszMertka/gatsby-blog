import React from "react";
import Nav from "./nav";
import Logo from "./logo";
import styles from "../styles/header.module.scss";
import gatsbyIcon from "../images/gatsby-icon.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          href="https://www.gatsbyjs.org"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img className={styles.gatsbyIcon} src={gatsbyIcon} alt="Gatsby" />
        </a>
      </div>
      <div className={`${styles.container} ${styles.logo}`}>
        <Logo />
      </div>
      <div className={`${styles.container} ${styles.nav}`}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
