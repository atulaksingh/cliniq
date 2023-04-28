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
      <div>
        <Header />
        <div className="px-[105px]">
          <Title title="Blog" desc="Read all the news about our company" />
          <div className="grid grid-cols-12 py-10 gap-7">
            <div className="col-span-9">
              <BlogCard1  height="375px" font="34px"  />
            </div>
            <div className="col-span-3">
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
