import React from "react";
import MyLink from "./MyLink";

const Tabs = ({ page, perPage, totalPages }) => {
  const pagination = (page, perPage, totalPages) => {
    if (totalPages < 7) {
      const pages = [];
      for (let i = 1; i < totalPages + 1; i++) {
        pages.push(i);
      }
      return pages.map(item => (
        <MyLink
          linkElement={item}
          currentPage={page}
          perPage={perPage}
          toPage={item}
          linkText={item}
        />
      ));
    } else if (page < 4) {
      const pages = [];
      for (let i = 1; i < 5; i++) {
        pages.push(i);
      }
      pages.push("..", "..", totalPages);

      return pages.map(item => (
        <MyLink
          linkElement={item}
          currentPage={page}
          perPage={perPage}
          toPage={item}
          linkText={item}
        />
      ));
    } else if (page > totalPages - 3) {
      const pages = [1, "..", ".."];
      for (let i = totalPages - 3; i < totalPages + 1; i++) {
        pages.push(i);
      }

      return pages.map(item => (
        <MyLink
          linkElement={item}
          currentPage={page}
          perPage={perPage}
          toPage={item}
          linkText={item}
        />
      ));
    } else {
      const pages = [1, "..", page - 1, page, 1 + +page, "..", totalPages];
      return pages.map(item => (
        <MyLink
          linkElement={item}
          currentPage={page}
          perPage={perPage}
          toPage={item}
          linkText={item}
        />
      ));
    }
  };

  return (
    <div>
      <nav>
        <MyLink
          linkElement={1}
          currentPage={page}
          perPage={perPage}
          toPage={page - 1}
          linkText={"Prev"}
        />
        {pagination(page, perPage, totalPages)}
        <MyLink
          linkElement={totalPages}
          currentPage={page}
          perPage={perPage}
          toPage={+page + 1}
          linkText={"Next"}
        />
      </nav>
    </div>
  );
};

export default Tabs;
