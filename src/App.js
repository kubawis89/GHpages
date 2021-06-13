import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Memes from "./components/Memes/Memes";
import AddMem from "./components/AddMem/AddMem";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import NavBarResponsive from "./components/Navigation/NavBarResponsive";

import styled from "styled-components";
import "./App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

export const AppContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0px auto;
  background-color: #2f3336;
  color: #efefef;
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 372px);
    @media only screen and (max-width: 319px) {
      min-height: calc(100vh - 545px);
    }
  }
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <NavBarResponsive />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/GHpages/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Memes chosenPath="home" />
          </Route>
          <Route exact path="/hot">
            <Memes chosenPath="hot" />
          </Route>
          <Route exact path="/regular">
            <Memes chosenPath="regular" />
          </Route>
          <Route exact path="/poor">
            <Memes chosenPath="poor" />
          </Route>
          <Route exact path="/favorite">
            <Memes chosenPath="favorite" />
          </Route>
          <Route exact path="/add">
            <AddMem />
          </Route>
          <Route path="*">
            <Redirect to="/error_404" />
            <ErrorPage />
          </Route>
        </Switch>
        <Socials />
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
