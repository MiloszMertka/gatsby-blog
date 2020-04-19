import React from "react";
import { Link } from "gatsby";

const Article = props => {
  return (
    <article>
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.excerpt }}></div>
        <Link to={`article/${props.slug}`}>{props.title}</Link>
      </div>
      {props.image}
    </article>
  );
};

export default Article;
