import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 20 },
      { name: "Mueller", age: 22 },
      { name: "Kunal", age: 23 }
    ]
  };

  switchNameHandler = () => {
    // console.log("Was Clicked");
    // this.state.person[0].name="jksjdssdsd"; Don't do this
    this.setState({
      persons: [
        { name: "Lololol", age: 20 },
        { name: "Mueller", age: 22 },
        { name: "Kunal", age: 23 }
      ]
    });
  };
  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Maxsdsds", age: 20 },
        { name: event.target.value, age: 22 },
        { name: "Kunal", age: 23 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>I am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* don't */}
        {/* use switchNameHandler() as it will be called as soon as the page */}
        {/* renders. So we just have to pass a reference. So simply just type in the */}
        {/* name. */}

        <Person name="Joel" age="21">
          dsds
        </Person>
        <Person name="Judith" age="24" />
        <Person name="Juliet" age="50" />
        <Person name="Johnson" age="51" />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}
          // changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
