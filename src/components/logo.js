import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import logo from "../images/logo.svg";
import styles from "../styles/logo.module.scss";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <figure>
      <img src={logo} alt="Logo" />
      <figcaption className={styles.caption}>
        {data.site.siteMetadata.title}
      </figcaption>
    </figure>
  );
};

export default Logo;
