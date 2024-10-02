import React, { useState } from "react";
import InputFeild from "./components/InputFeild";
import "./App.css";
// // let nameExample = "Prakash"; // this is not correct
// let firstName: string = "Prakash"; // string
// // let age: number = 5; // number/float/ any kind of number
// let isStudent: boolean = true; // or false

// //tupples - fix number of element or types we can say
// let role: [number, string];
// role = [10, "hello"]; // correct way to define and it is also called tuple

// //object 2 way to define
// // type

// type Person = {
//   name: string;
//   age: number;
// };

// let person: Person = {
//   name: "Prakash",
//   age: 20,
// };

// let lotsOfPeople: Person[]; // array of person

// let printName: (name: string) => void; // return can be anything string/boolean/number etc
// // for function we can define void but it return undefined every time
// // we can define never but never doesnot return anything

// let perName: unknown; // her better to use unknown type instead of any

// let printName1: (name: string) => never; //it doesnt return anything

// interface people {
//   professiom: string;
// }
//so we are providing the App: React.FC means of function of type react component and called functional component
// other type as well i.e React.ReactNode this means this will be all the type boolean, undefined, null, reactfragment, reactChild

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  // need to give a type so <string> and given a default value empty string so it will say only string or else it'll string | undefined
  // suppose want to expect multiple value here so you can use union
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild />
    </div>
  );
};

export default App;
