import React from "react";
import BlogCard2 from "../components/Blog/BlogCard2";
import Header from "../components/shared/Header";
import Title from "../components/cards/Title";
import Footer from "../components/shared/Footer";
import BlogCard1 from "../components/Blog/BlogCard1";
import BlogCard3 from "../components/Blog/BlogCard3";

function GridLayout() {
  return (
    <>
      <div>
        <Header />
        <div className="container mx-auto">

        <div className="px-5 lg:px-[73px]">
          <Title title="Blog" desc="Read all the news about our company" />
          <div className="grid grid-cols-12 py-10 lg:gap-7">
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <div className="col-span-1 -z-10">
                  <BlogCard3  font="22px"   />
                </div>
                <div className="col-span-1">
                <BlogCard3  font="22px"   />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <BlogCard2 />
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default GridLayout;
