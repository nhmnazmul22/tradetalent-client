import React from "react";
import BlogCard from "./BlogCard";
import {fadeInUp, staggerContainer} from "@/lib/motionVariants";
import {motion} from "motion/react";
import {blogs} from "@/constant/index.js";

const Blogs = () => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="start"
            whileInView="end"
            viewport={{once: true}}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
            {blogs.map((blog) => (
                <motion.div key={blog.id} variants={fadeInUp}>
                    <BlogCard blog={blog}></BlogCard>
                </motion.div>
            ))}

        </motion.div>
    );
};

export default Blogs;
