import React, { useState } from "react";
import Validation from "./Validation";
import FormInput from "./FormInput";
import ErrorMessage from "./ErrorMessage";

function FormHandling1() {
  const initialValues = { name: "", email: "", password: "" };

  const [inputValue, setInputValue] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onSumitHandler = (e) => {
    e.preventDefault();
    const validationErrors = Validation({ inputValue });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission
      console.log("Form submitted:", inputValue);
    }
  };

  return (
    <div>
      <form>
        <FormInput
          label="Name:"
          type="text"
          name="name"
          value={inputValue.name}
          onChange={onChangeHandler}
        />
        <ErrorMessage message={errors.name} />

        <FormInput
          label="Email:"
          type="email"
          name="email"
          value={inputValue.email}
          onChange={onChangeHandler}
        />
        <ErrorMessage message={errors.email} />

        <FormInput
          label="Password:"
          type="password"
          name="password"
          value={inputValue.password}
          onChange={onChangeHandler}
        />
        <ErrorMessage message={errors.password} />

        <button onClick={onSumitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default FormHandling1;

