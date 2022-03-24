import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";

export default function CardInitial(props) {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputClass, setInputClass] = useState("");

  useEffect(()=>{
    setInputName(localStorage.getItem("inputName") || "")
    setInputLastName(localStorage.getItem("inputLastName") || "")
    setInputClass(localStorage.getItem("inputClass") || "")
  }, [])

  const nameChange = (event) => {
    setInputName(event.target.value);
  };
  const lastNameChange = (event) => {
    setInputLastName(event.target.value);
  };
  const classChange = (event) => {
    setInputClass(event.target.value);
  };

  const getMatches = () => {
    const newName = inputName + inputLastName + inputClass;
    props.clickInitial(newName)
    localStorage.setItem("inputName", inputName)
    localStorage.setItem("inputLastName", inputLastName)
    localStorage.setItem("inputClass", inputClass)
  };
  return (
    <div>
      <TextField
        required
        value={inputName}
        onChange={nameChange}
        id="filled-name"
        label="Nome"
        fullWidth
      />
      <TextField
        required
        value={inputLastName}
        onChange={lastNameChange}
        id="filled-turma"
        label="Sobrenome"
        fullWidth
      />
      <TextField
        required
        value={inputClass}
        onChange={classChange}
        id="filled-lastname"
        label="Turma"
        fullWidth
      />
      <Button
        className="button-matches"
        onClick={getMatches}
        variant="contained"
        color="primary"
      >
        Encontrar Matches
      </Button>
    </div>
  );
}
