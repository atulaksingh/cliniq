import React from "react";
import BlogCard2 from "../components/Blog/BlogCard2";
import Header from "../components/shared/Header";
import Title from "../components/cards/Title";
import Footer from "../components/shared/Footer";
import BlogCard1 from "../components/Blog/BlogCard1";

function GridLayout() {
  return (
    <>
      <div>
        <Header />
        <div className="px-[105px]">
          <Title title="Blog" desc="Read all the news about our company" />
          <div className="grid grid-cols-12 py-10 gap-7">
            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-7">
                <div className="col-span-1">
                  <BlogCard1 height="200px" font="22px"   />
                </div>
                <div className="col-span-1">
                <BlogCard1 height="200px" font="22px"   />
                </div>
              </div>
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

export default GridLayout;