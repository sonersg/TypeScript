import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setpeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}
function AddToList({ people, setpeople }: IProps) {
  const [input, setinput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setpeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setinput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        className="AddToList-input"
        type="text"
        placeholder="Name"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        className="AddToList-input"
        type="number"
        placeholder="Age"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        className="AddToList-input"
        type="text"
        placeholder="URL"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <textarea
        className="AddToList-input"
        placeholder="Notes"
        value={input.note}
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add New Person
      </button>
    </div>
  );
}

export default AddToList;
