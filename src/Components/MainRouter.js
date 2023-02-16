import React from "react";
import { Switch, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Players from "./Players/Players";
import PlayerDetail from "./PlayerDetail/PlayerDetail";
import AllGames from "./AllGames/AllGames";
import AboutUs from "./AboutUs/AboutUs";
import ContactForm from "./ContactForm/ContactForm";
import CaroGame from "./Games/GameCaro/CaroGame";
import ColorBlast from "./Games/GameColorBlast/ColorBlastGame";
import Coloron from "./Games/GameColoron/ColoronGame";
import Menja from "./Games/GameMenja/MenjaGame";
import SNAKE from "./Games/GameSnake/SnakeGame";
import TwoGame from "./Games/GameTwo048/TwoGame";
import Layout from "../HOC/Layout";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import RoomsPage from "./Games/Rooms/RoomsPage";

const MainRouter = () => (
  <>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="/signin"
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />
      <Route
        path="/players"
        element={
          <Layout>
            <Players />
          </Layout>
        }
      />
      <Route
        path="/playerDetail"
        element={
          <Layout>
            <PlayerDetail />
          </Layout>
        }
      />
      <Route
        path="/allGames"
        element={
          <Layout>
            <AllGames />
          </Layout>
        }
      />
      <Route
        path="/aboutUS"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/contactForm"
        element={
          <Layout>
            <ContactForm />
          </Layout>
        }
      />
      {/* GAMES  */}
      <Route path="/caroGame" element={<CaroGame />} />
      <Route path="/caroGame/room" element={<RoomsPage />} />
      <Route path="/colorBlastGame" element={<ColorBlast />} />
      {/* mistake coloronGame  */}
      <Route path="/coloronGame" element={<Coloron />} />
      <Route path="/menjaGame" element={<Menja />} />
      <Route path="/snakeGame" element={<SNAKE />} />
      <Route path="/twoGame" element={<TwoGame />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default MainRouter;
