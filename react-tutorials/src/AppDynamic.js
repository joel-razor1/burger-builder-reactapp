import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 20 },
      { name: "Mueller", age: 22 },
      { name: "Kunal", age: 23 }
    ],
    showPersons: false
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
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let personsval = null;
    if (this.state.showPersons) {
      personsval = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I am a React App</h1>
        <button onClick={this.togglePersonHandler}>Toggle Persons</button>
        {/* don't */}
        {/* use switchNameHandler() as it will be called as soon as the page */}
        {/* renders. So we just have to pass a reference. So simply just type in the */}
        {/* name. */}
        {personsval}
      </div>
    );
  }
}

export default App;
