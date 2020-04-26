import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Article from "../components/article";

const IndexPage = ({ data }) => {
  const { node } = data.allMarkdownRemark.edges[0];

  return (
    <Layout>
      <SEO title="Home" />
      <Article
        title={node.frontmatter.title}
        excerpt={node.excerpt}
        thumbnail={node.frontmatter.thumbnail}
        slug={node.fields.slug}
      />
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___datePublished, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            thumbnail
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
