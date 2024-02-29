import * as yup from "yup";

function useValidations() {
  const nameRegex = /^[^\d]{2,}$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .matches(nameRegex, "First Name must not contain numbers")
      .required("First Name is required"),
    lastName: yup
      .string()
      .min(2, "Last Name must be at least 2 characters")
      .matches(nameRegex, "Last Name must not contain numbers")
      .required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8)
      .matches(passwordRegex, "Invalid password format")
      .required("Password is required"),
  });
  return schema;
}

export default useValidations;
