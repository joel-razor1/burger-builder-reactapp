import React from "react";

//This is how you create a Functional Component
const person = props => {
  return (
    <div>
      <p>
        I am {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person; //don't forget to export if you want this function to be used in other files.
