export const checkValidLoginData = (email, password) => {
  // ! these variable will recive true or false value
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  // const validPasswrord =
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const validPasswrord =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validEmail) return "Incorrect Email";
  if (!validPasswrord) return "Incorrect Password";

  return null;
};

export const checkValidSignUpData = (
  firstName,
  lastName,
  number,
  email,
  password
) => {
  const validFirstName = /^[a-zA-Z]{2,30}$/.test(firstName);
  const validLastName = /^[a-zA-Z'-]{2,30}$/.test(lastName);
  const validNumber = /^\d{10}$/.test(number);
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const validPasswrord =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validFirstName) return "Enter valid first name";
  if (!validLastName) return "Enter valid last name";
  if (!validNumber) return "Enter valid phone number ";
  if (!validEmail) return "Enter valid email id ";
  if (!validPasswrord) return "Enter valid Password";

  return null;
};
