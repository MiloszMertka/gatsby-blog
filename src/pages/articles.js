import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticlesList from "../components/articles-list";

const ArticlesPage = () => {
  return (
    <Layout>
      <SEO title="Articles" />
      <ArticlesList />
    </Layout>
  );
};

export default ArticlesPage;
