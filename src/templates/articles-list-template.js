import React from "react";
import { graphql, Link } from "gatsby";
import styles from "../styles/articles-list-template.module.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Article from "../components/article";

const ArticlesListTemplate = ({ data, pageContext }) => {
  const { edges } = data.allMarkdownRemark;
  const articles = edges.map(({ node }) => (
    <Article
      key={node.id}
      title={node.frontmatter.title}
      thumbnail={node.frontmatter.thumbnail}
      excerpt={node.excerpt}
      slug={node.fields.slug}
    />
  ));

  const { currentPage, numPages } = pageContext;

  return (
    <Layout>
      <SEO title="Articles" />
      {articles}
      <nav className={styles.pagination}>
        {Array.from({ length: numPages }, (_, index) => (
          <Link
            className={styles.link}
            activeClassName={styles.active}
            key={index + 1}
            to={`/articles/${index === 0 ? "" : index + 1}`}
          >
            {index + 1}
          </Link>
        ))}
      </nav>
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___datePublished], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(format: HTML, pruneLength: 1000)
          frontmatter {
            datePublished(formatString: "DD MMMM, YYYY")
            title
            category
            author
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default ArticlesListTemplate;
