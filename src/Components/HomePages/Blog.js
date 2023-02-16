import React from "react";
import BlogItem from "./BlogItem";
import "../../assets/css/blog.css";

export default function Blog() {
  return (
    <section className="blog text-center">
      <div className="container">
        <div className="blog__content">
          <div className="blog__title">
            <h2>Latest Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="blog__list row">
            <BlogItem
              img={"https://htmldemo.net/bonx/bonx/assets/img/blog/blog1.webp"}
            />
            <BlogItem
              img={"https://htmldemo.net/bonx/bonx/assets/img/blog/blog1.webp"}
            />
            <BlogItem
              img={"https://htmldemo.net/bonx/bonx/assets/img/blog/blog1.webp"}
            />
            <BlogItem
              img={"https://htmldemo.net/bonx/bonx/assets/img/blog/blog1.webp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
