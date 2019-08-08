import React from "react";
import { withRouter } from "react-router-dom";

const SelectorPerPage = ({ page, perPage, totalPosts, history }) => {
  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    history.push(`./perPage=${value}&page=1`);
  };

  return (
    <div className="postsInfo">
      <div>
        показаны сообщения с {Math.ceil(perPage * (page - 1) + 1)} по{" "}
        {Math.min(Math.ceil(perPage * page), totalPosts)} из {totalPosts}{" "}
      </div>
      <div>
        Показывать по:{" "}
        <select value={perPage} onChange={handleChange}>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>{" "}
        сообщений
      </div>
    </div>
  );
};

export default withRouter(SelectorPerPage);
