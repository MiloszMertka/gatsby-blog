import React from "react";
import { Link } from "gatsby";
import styles from "../styles/article.module.scss";

const Article = props => {
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>{props.title}</h2>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
        ></div>
        <Link className={styles.link} to={`article/${props.slug}`}>
          Czytaj dalej
        </Link>
      </div>
      <img
        className={styles.thumbnail}
        src={`../images/${props.thumbnail}`}
        alt=""
      />
    </article>
  );
};

export default Article;
