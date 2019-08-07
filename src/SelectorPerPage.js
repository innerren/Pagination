import React from "react";
import { withRouter } from "react-router-dom";

const SelectorPerPage = ({ perPage, history }) => {
  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    console.log(history);
    history.push(`./perPage=${value}&page=1`);
  };

  return (
    <div>
      <select value={perPage} onChange={handleChange}>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default withRouter(SelectorPerPage);
