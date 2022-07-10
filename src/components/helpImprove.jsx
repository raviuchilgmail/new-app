import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovies } from "../services/fakeDataService";
import { getSong } from "../services/fakeDataService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

class HelpImprove extends Form {
  state = {
    data: {
      category: "",
      movieId: "",
      singers: "",
      actors: "",
      musicdirectors: "",
      lyricists: "",
      videoyoutubelinks: "",
    },
    movies: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    category: Joi.string().required().label("Category"),
    movieId: Joi.string().required().label("Movie"),
    singers: Joi.string().required().label("Singers"),
    actors: Joi.string().required().label("Actors"),
    musicdirectors: Joi.string().required().label("MusicDirectors"),
    lyricists: Joi.string().required().label("Lyricists"),
    videoyoutubelinks: Joi.string().required().label("VideoYoutubeLinks"),
  };

  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies });

    //const { songId } = useParams();
    //if (songId === "new") return;

    //const song = getSong(songId);
    //if (!song) navigate;
  }

  doSubmit = () => {
    //Call the server after checking for user input errors
    console.log("Submitted");
  };

  render() {
    return (
      <div className="m-5">
        <div>
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default HelpImprove;
