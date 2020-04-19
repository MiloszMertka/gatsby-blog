import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Article from "./article";

const ArticlesList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              title
            }
            excerpt(format: HTML, pruneLength: 1000)
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const { edges } = data.allMarkdownRemark;
  const articles = edges.map(({ node }) => (
    <Article
      key={node.id}
      title={node.frontmatter.title}
      excerpt={node.excerpt}
      slug={node.fields.slug}
    />
  ));
  return <>{articles}</>;
};

export default ArticlesList;
