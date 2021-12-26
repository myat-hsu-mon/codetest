import type { NextPage } from "next";
type Tag = {
  tag: string;
  select: boolean;
};

const Tag: NextPage<Tag> = ({ tag }) => <div>{tag}</div>;

export default Tag;
