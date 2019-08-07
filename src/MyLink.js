import React from "react";
import { Link } from "react-router-dom";

const MyLink = ({ linkElement, currentPage, perPage, toPage, linkText }) => {
  //console.log(`Start ${linkElement}`);
  if (+linkElement && +linkElement !== +currentPage) {
    //console.log(`IF ${linkElement}`);
    return (
      <Link className="button" to={`./perPage=${perPage}&page=${toPage}`}>
        {linkText}
      </Link>
    );
  } else if (+linkElement !== +currentPage || +linkElement !== +toPage) {
    return <span className="fictiveLink button">{linkText}</span>;
  } else {
    return <span className="activeLink button">{linkText}</span>;
  }
};

export default MyLink;
