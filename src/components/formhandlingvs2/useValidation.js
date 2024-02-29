import * as yup from "yup";

function useValidation() {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .matches(/^[^\d]{2,}$/, "Name must not contain numbers")
      .required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
        "Invalid password format"
      )
      .required("Password is required"),
  });

  return schema;
}

export default useValidation;
