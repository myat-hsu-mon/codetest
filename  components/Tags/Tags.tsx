import type { GetStaticProps, NextPage } from "next";
import React from "react";
import categories from "../../data/categories.json";
import Tag from "./Tag";

const Tags: NextPage = () => {
  const [select, setSelect] = React.useState(false);

  return (
    <div>
      {categories.map(({ name, slug }) => (
        <Tag key={name} tag={name} select={select}>
          {name}
        </Tag>
      ))}
    </div>
  );
};

export default Tags;
