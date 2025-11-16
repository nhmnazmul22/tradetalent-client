import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
    </div>
  );
};

export default Blogs;
