import React from "react";
import "./Forms.css";
const Form = () => {
  return (
    <form className="form">
      <span className="heading">Enroll For Course</span>

      <span className="Mail">E-Mail</span>
      <input placeholder="Enter E-Mail" type="text" className="input" />
      <span className="Password">Name</span>
      <input placeholder="Enter Name" type="text" className="input" />

      <button>Enroll Now</button>
    </form>
  );
};

export default Form;
