import React from "react";

const ToggleSwitch = ({ label }) => {
  return (
    <form>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="option1"
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlfor="flexCheckDefault">
          {label}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="option2"
          id="flexCheckChecked"
          checked
        />
        <label className="form-check-label" htmlfor="flexCheckChecked">
          {label}
        </label>
      </div>
    </form>
  );
};

export default ToggleSwitch;
