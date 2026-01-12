import axios from "axios";

export const signup = async (name, email, password) => {
  try {
    console.log({ name, email, password });

    const res = await axios.post("http://localhost:4002/api/users/signup", {
      name,
      email,
      password,
    });

    return res;
  } catch (error) {
    console.error("ERROR", error);
    return error?.response;
  }
};

