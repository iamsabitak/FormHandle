import React, { useState } from "react";

function FormHandling1x() {
  const data = { name: "", email: "", password: "" };

  const [inputValue, setInputValue] = useState(data);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswrodError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[^\d]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const onChangeHandler = (e) => {
    const newObj = { ...inputValue, [e.target.name]: e.target.value };

    setInputValue(newObj);
  };
  const onSumitHandler = (e) => {
    e.preventDefault();

    if (inputValue.name.trim() === "") {
      setNameError("Name field can't be empty");
    } else if (!nameRegex.test(inputValue.name)) {
      setNameError("Digits are not allowed and  name can be only string ");
      return;
    }

    if (inputValue.email.trim() === "") {
      setEmailError("Fill the email");
    } else if (!emailRegex.test(inputValue.email)) {
      setEmailError("Invalid Email Address");
      return;
    }

    if (inputValue.password.trim() === "") {
      setPasswrodError("Password field can't be empty");
    } else if (!passwordRegex.test(inputValue.password)) {
      setPasswrodError("Invalid password ");
    }
    console.log(inputValue);
  };

  const style = {
    color: "black",
    border: "1px solid grey",
    width: "200px",
    fontFamily: "roboto",
  };
  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            placeholder="Enter your fname"
            name="name"
            value={inputValue.name}
            onChange={onChangeHandler}
          />
          {nameError && <p style={style}>{nameError}</p>}
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={inputValue.email}
            onChange={onChangeHandler}
          />
          {emailError && <p style={style}>{emailError}</p>}
        </label>
        <label htmlFor="email">
          Password:
          <input
            type="email"
            placeholder="Enter your password"
            name="password"
            value={inputValue.password}
            onChange={onChangeHandler}
          />
          {passwordError && <p style={style}>{passwordError}</p>}
        </label>
        <button onClick={onSumitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default FormHandling1x;
