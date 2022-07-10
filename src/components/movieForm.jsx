import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMatch } from "react-router-dom";

const MovieForm = () => {
  const { selectedParam, id } = useParams();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  // const match = useMatch();

  console.log(selectedParam, id);
  console.log(pathname);
  console.log(search);
  // console.log(match);
  return (
    <div>
      <h3>Movie Form {id}</h3>
      <p>SelectedParam: {selectedParam}</p>
      <p>SelectedID: {id}</p>
      <button onClick={() => navigate(-2)}>Navigate to Home</button>;
    </div>
  );
};

export default MovieForm;
