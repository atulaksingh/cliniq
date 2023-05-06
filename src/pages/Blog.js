import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Title from "../components/cards/Title";
import LatestCard from "../components/cards/LatestCard";
import BlogCard1 from "../components/Blog/BlogCard1";
import BlogCard2 from "../components/Blog/BlogCard2";

function Blog() {
  return (
    <>
      <div className="font-[Helvetica]">
        <Header />
        <div className="px-5 lg:px-[105px] ">
          <Title title="Blog" desc="Read all the news about our company" />
          <div className="grid grid-cols-12 py-10 gap-5 lg:gap-7">
            <div className="col-span-12 lg:col-span-9 ">
              <BlogCard1  />
              <BlogCard1   />
            </div>
            <div className="col-span-12 lg:col-span-3">
             <BlogCard2 />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
