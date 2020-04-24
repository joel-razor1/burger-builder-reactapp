// import React, { useState } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// const app = props => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Max", age: 20 },
//       { name: "Mueller", age: 22 },
//       { name: "Kunal", age: 23 }
//     ]
//   });
//   const switchNameHandler = () => {
//     // console.log("Was Clicked");
//     // this.state.person[0].name="jksjdssdsd"; Don't do this
//     setPersonState({
//       persons: [
//         { name: "Lololol", age: 20 },
//         { name: "Mueller", age: 22 },
//         { name: "Kunal", age: 23 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>I am a React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       {/* don't */}
//       {/* use switchNameHandler() as it will be called as soon as the page */}
//       {/* renders. So we just have to pass a reference. So simply just type in the */}
//       {/* name. */}

//       <Person name="Joel" age="21">
//         dsds
//       </Person>
//       <Person name="Judith" age="24" />
//       <Person name="Juliet" age="50" />
//       <Person name="Johnson" age="51" />
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       />
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       />
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default app;
