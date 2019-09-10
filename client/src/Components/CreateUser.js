import React, { useState } from "react";

function CreateUser() {
  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = event => {
    setUserInput(event.target.value);
  };
  return (
    <div>
      Hey From Create User. Here, we will make a form that will ask for name,
      email, password
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={inputChangeHandler}
        value={userInput}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={inputChangeHandler}
        value={userInput}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        onChange={inputChangeHandler}
        value={userInput}
      />
      <button>Submit</button>
    </div>
  );
}

export default CreateUser;
