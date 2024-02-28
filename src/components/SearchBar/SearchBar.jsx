/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./style.module.css";
import { Search } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key == "Enter" && e.target.value.trim() != "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <Search size={27} className={style.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={style.input}
        type="text"
        value={value}
        placeholder={"Find your show..."}
      />
    </>
  );
}
