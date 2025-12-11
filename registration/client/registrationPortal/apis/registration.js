import axios from "axios";

export const registerUser = async (
  firstName,
  lastName,
  email,
  gender,
  dob,
  phoneNumber
) => {
  try {
    console.log({ firstName, lastName, email, gender, dob, phoneNumber });

    const res = await axios.post("url", {
      firstName,
      lastName,
      email,
      gender,
      dob,
      phoneNumber,
    });

    return res;
  } catch (error) {
    console.error("ERROR", error);
    return error?.response;
  }
};
