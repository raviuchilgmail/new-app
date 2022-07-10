import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const YearForm = () => {
  const { id } = useParams();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  // const match = useMatch();

  console.log(id);
  console.log(pathname);
  console.log(search);
  // console.log(match);
  return (
    <div>
      <h3>Year Form {id}</h3>
      <button onClick={() => navigate("/")}>Navigate to Home</button>;
    </div>
  );
};

export default YearForm;
