const Validation = ({ inputValue }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[^\d]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const errors = {};

  if (!inputValue || inputValue.name.trim() === "") {
    errors.name = "Name field can't be empty";
  } else if (!nameRegex.test(inputValue.name)) {
    errors.name = "Digits are not allowed and name can be only string";
  }

  if (!inputValue || inputValue.email.trim() === "") {
    errors.email = "Fill the email";
  } else if (!emailRegex.test(inputValue.email)) {
    errors.email = "Invalid Email Address";
  }

  if (!inputValue || inputValue.password.trim() === "") {
    errors.password = "Password field can't be empty";
  } else if (!passwordRegex.test(inputValue.password)) {
    errors.password = "Invalid password";
  }

  return errors;
};

export default Validation;
