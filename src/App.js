import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./App.css";

function App() {
  return (
    <div>
      <Zadanie1 />
      <Zadanie2 />
      <Zadanie3 />
      <Zadanie4 />
      <Zadanie5 />
    </div>
  );
}

function Zadanie1() {
  const owoce = ["banan", "brzoskwinia", "pomarańcza", "kiwi"];
  const listItems = owoce.map(owoc => <li>{owoc}</li>);
  return (
    <>
      <div className="Zadanie">zadanie1</div>
      <br></br>
      <ul>{listItems}</ul>
    </>
  );
}

function Zadanie2() {
  const [color, setColor] = useState("red");
  function handleColorChange() {
    const nextColor = color === "green" ? "red" : "green";
    setColor(nextColor);
  }

  return (
    <>
      <div className="App">
        <div className="Zadanie">zadanie2</div>
        <div className="Text" style={{ color }}>
          text
        </div>
        <button onClick={handleColorChange}>press me</button>
      </div>
    </>
  );
}

function Zadanie3() {
  const [count, setCount] = useState(0);
  const groups = [
    {
      id: "101",
      value: "101",
      label: "101",
      students: [
        { name: "Jan", age: 21 },
        { name: "Michał", age: 19 },
        { name: "Kuba", age: 20 },
        { name: "Izabella", age: 16 }
      ]
    },
    {
      id: "102",
      value: "102",
      label: "102",
      students: [
        { name: "Marcin", age: 20 },
        { name: "Maksim", age: 20 },
        { name: "Kacper", age: 20 }
      ]
    },
    {
      id: "103",
      value: "103",
      label: "103",
      students: [
        { name: "Łukasz", age: 20 },
        { name: "Marcin", age: 20 },
        { name: "Mikolaj", age: 19 },
        { name: "Kuba", age: 20 },
        { name: "Izabella", age: 16 }
      ]
    }
  ];
  const [selectedGroup, setSelectedOption] = useState(0);
  const handleChange = e => {
    setSelectedOption(groups.indexOf(e));
  };

  return (
    <div className="App">
      <div className="Zadanie">zadanie3</div>
      <div className="Enter">
        <Select
          placeholder="Select group"
          value={groups[selectedGroup]}
          options={groups}
          onChange={handleChange}
        />
      </div>
      <Grupa value={selectedGroup} groups={groups} />
    </div>
  );
}

function Grupa(props) {
  console.log(props);
  console.log(props.groups[props.value]);
  // let arr = [];
  // for (let object of props.groups) {
  //   console.log(props.value);
  //   console.log(object.id);
  //   if (props.value === object.id) {
  //     arr = object.students;
  //   }
  // }
  // console.log(arr);

  return (
    <>
      {/*arr.map(student => {
          return (
            <div className="Student">
              {" "}
              <div>{student.name}</div>
              <div>{student.age}</div>
            </div>
          );
        })*/}
      {props.groups[props.value].students.map(student => {
        return (
          <div className="Student">
            {" "}
            <div>{student.name}</div>
            <div>{student.age}</div>
          </div>
        );
      })}
    </>
  );
}

function useCounter(state = 0) {
  const [count, setCount] = useState(state);
  const function1 = () => setCount(count + 1);
  const function2 = () => setCount(count - 1);
  return [count, function1, function2];
}

function Zadanie4() {
  const [count, oneUp, oneDown] = useCounter(10);

  return (
    <>
      <div className="Zadanie">zadanie4</div>
      <div>{count}</div>
      <button onClick={oneDown}>-</button>
      <button onClick={oneUp}>+</button>
    </>
  );
}

function Zadanie5() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 2);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="Zadanie">zadanie5</div>
      <div>{count}</div>{" "}
    </>
  );
}

export default App;
