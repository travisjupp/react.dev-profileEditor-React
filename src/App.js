import { useState } from "react";

export default function EditProfile() {
  const [mode, setMode] = useState("viewing");
  const [inputData, setInputData] = useState({
    firstName: "Jane",
    lastName: "Jacobs",
  });
  function handleFormInput(e) {
    setMode("editing");
    setInputData({
      ...inputData,
      [e.target.id]: e.target.value,
    });
  }
  function handleMode(e) {
    e.preventDefault();
    setMode(mode === "viewing" ? "editing" : "viewing");
  }
  return (
    <form>
      <label>
        <span>First name:</span>{" "}
        <b hidden={mode === "editing"}>{inputData.firstName}</b>
        <input
          id="firstName"
          hidden={mode === "viewing"}
          value={inputData.firstName}
          onChange={handleFormInput}
        />
      </label>
      <label>
        <span>Last name:</span>{" "}
        <b hidden={mode === "editing"}>{inputData.lastName}</b>
        <input
          id="lastName"
          hidden={mode === "viewing"}
          value={inputData.lastName}
          onChange={handleFormInput}
        />
      </label>
      <button type="submit" onClick={handleMode}>
        {mode === "viewing" ? "Edit Profile" : "Save Profile"}
      </button>
      <p>
        <i>
          Hello, {inputData.firstName} {inputData.lastName}!
        </i>
      </p>
    </form>
  );
}
