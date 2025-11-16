import React from "react";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <BlogsCard></BlogsCard>
      <BlogsCard></BlogsCard>
      <BlogsCard></BlogsCard>
      <BlogsCard></BlogsCard>
    </div>
  );
};

export default Blogs;
