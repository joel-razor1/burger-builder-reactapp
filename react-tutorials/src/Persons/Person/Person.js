import React, { Component } from "react";

//This is how you create a Functional Component
class Person extends Component {
  render() {
    console.log("[Person.js] rendering.....");
    return (
      <div>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        {/* <input onChange={props.changed} value={props.name}></input> */}
      </div>
    );
  }
}

export default Person; //don't forget to export if you want this function to be used in other files.
