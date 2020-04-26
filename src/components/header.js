import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Nav from "./nav";
import Logo from "./logo";
import styles from "../styles/header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          href="https://www.gatsbyjs.org"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <Img
            className={styles.gatsbyIcon}
            fixed={data.file.childImageSharp.fixed}
            alt="Gatsby"
          />
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
