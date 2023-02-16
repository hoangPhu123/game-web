import React from "react";
import AboutUsHome from "./HomePages/AboutUsHome";
import Banner from "./HomePages/Banner";
import Blog from "./HomePages/Blog";
import ClientComment from "./HomePages/ClientComment";
import ConnectUs from "./HomePages/ConnectUs";
import Numbers from "./HomePages/Numbers";
import PopularGame from "./HomePages/PopularGame";
import Service from "./HomePages/Service";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Service />
      <AboutUsHome />
      <Numbers />
      <PopularGame />
      <ClientComment />
      <Blog />
      <ConnectUs />
    </div>
  );
}
