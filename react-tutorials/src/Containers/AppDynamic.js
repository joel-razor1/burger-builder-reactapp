import React, { Component } from "react";
import "./App.css";
import Persons from "../Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { name: "Max", age: 20 },
        { name: "Mueller", age: 22 },
        { name: "Kunal", age: 23 }
      ],
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
  componentWillMount() {
    console.log("[App.js] componentWillMount");
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }
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
    console.log("[App.js] render");
    let personsval = null;
    if (this.state.showPersons) {
      personsval = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          perosns={this.state.persons}
          clicked={this.togglePersonHandler}
        />
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
