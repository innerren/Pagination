import React from "react";
import "./App.css";
import SelectorPerPage from "./SelectorPerPage";
import Tabs from "./Tabs";

const PostList = ({ props, posts }) => {
  const { page, perPage } = props.match.params;
  const currentPosts = posts.slice(perPage * (page - 1), perPage * page);
  const totalPages = Math.ceil(posts.length / perPage);

  return !posts.length ? (
    <div className="loader"></div>
  ) : (
    <div className="App">
      <Tabs page={page} perPage={perPage} totalPages={totalPages} />
      <SelectorPerPage
        page={page}
        perPage={perPage}
        totalPosts={posts.length}
      />
      {currentPosts.map(post => {
        return (
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: post.elementPureHtml }}
          />
        );
      })}
      <SelectorPerPage
        page={page}
        perPage={perPage}
        totalPosts={posts.length}
      />
      <Tabs page={page} perPage={perPage} totalPages={totalPages} />
    </div>
  );
};

export default PostList;
