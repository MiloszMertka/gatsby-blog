import React from "react";
import { Link } from "gatsby";
import styles from "../styles/nav-links.module.scss";

const NavLinks = () => {
  return (
    <>
      <Link activeClassName={styles.active} className={styles.navLink} to="/">
        Home
      </Link>
      <Link
        activeClassName={styles.active}
        className={styles.navLink}
        to="articles"
      >
        Articles
      </Link>
      <Link
        activeClassName={styles.active}
        className={styles.navLink}
        to="about"
      >
        About
      </Link>
    </>
  );
};

export default NavLinks;
