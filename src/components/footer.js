import React from "react";
import styles from "../styles/footer.module.scss";
import logo from "../images/logo-dark.svg";
import arrow from "../images/arrow-up.svg";

const Footer = () => {
  const handleArrowClick = e => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.container}>
      <img src={logo} alt="Logo" />
      <p className={styles.text}>&copy; 2020 Miłosz Mertka</p>
      <a onClick={e => handleArrowClick(e)} href="#top" rel="nofollow">
        <img src={arrow} alt="Arrow" />
      </a>
    </footer>
  );
};

export default Footer;
