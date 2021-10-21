import React from "react";
import persons from "./persons";

const Person = () => {
  const [people, setPeople] = React.useState(persons);
  return (
    <>
      <h3>{people.length} Birthdays today</h3>
      {people.map((person) => {
        const { img, name, age } = person;
        return (
          <div className="person">
            <img src={img} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => setPeople([])}
        style={{ width: "90%"}}
      >
        clear all
      </button>
    </>
  );
};

export default Person;
