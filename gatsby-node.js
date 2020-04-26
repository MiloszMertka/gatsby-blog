/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({ node, name: "slug", value: slug });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(
    `${__dirname}/src/templates/article-template.js`
  );

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const articles = result.data.allMarkdownRemark.edges;

  articles.forEach(({ node }) => {
    createPage({
      component: articleTemplate,
      path: `/article/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const articlesListTemplate = path.resolve(
    `${__dirname}/src/templates/articles-list-template.js`
  );
  const articlesPerPage = 4;
  const numPages = Math.ceil(articles.length / articlesPerPage);

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      component: articlesListTemplate,
      path: index === 0 ? "/articles" : `/articles/${index + 1}`,
      context: {
        limit: articlesPerPage,
        skip: index * articlesPerPage,
        numPages,
        currentPage: index + 1,
      },
    });
  });
};
