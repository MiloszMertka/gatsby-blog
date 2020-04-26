import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ArticleTemplate = props => {
  return (
    <Layout>
      <article
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        category
        thumbnail
        title
        datePublished
      }
    }
  }
`;

export default ArticleTemplate;
