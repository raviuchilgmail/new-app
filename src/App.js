import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Messages from "./components/messages";
import Home from "./components/home";
import MovieForm from "./components/movieForm";
import HelpImprove from "./components/helpImprove";
import YearForm from "./components/yearForm";
import NotFound from "./components/common/noFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <Routes>
            <Route path="something/Year/:id" element={<YearForm />} />
            <Route path="something/:selectedParam/*" element={<MovieForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/helpimprove" element={<HelpImprove />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/not-found" />} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

//<Route path="/Year/:id" element={<YearForm />} />
