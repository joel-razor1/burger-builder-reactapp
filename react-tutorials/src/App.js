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
  render() {
    return (
      <div className="App">
        <h1>I am a React App</h1>
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
        />
      </div>
    );
  }
}

export default App;
