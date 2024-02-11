import axios from "axios";
import { BASE_URL } from "./constants";

const generateLink = async (url) => {
  const requestData = {
    url: url,
  };
  try {
    const { data } = await axios({
      url: `${BASE_URL}/url`,
      method: "POST",
      secure: true,
      data: requestData,
    });
    return data;
  } catch (e) {
    console.log("error while fetching data", e.message);
    throw e;
  }
};

const signupuser = async (name, email, password) => {
  const requestData = {
    name,
    email,
    password,
  };
  try {
    const { data } = await axios({
      url: `${BASE_URL}/user/signup`,
      method: "POST",
      secure: true,
      data: requestData,
    });
    return data;
  } catch (e) {
    console.log("error", e);
    throw e;
  }
};

const signinuser = async (email, password) => {
  const requestData = {
    email,
    password,
  };
  try {
    const { data } = await axios({
      url: `${BASE_URL}/user/signin`,
      method: "POST",
      secure: true,
      data: requestData,
    });
    return data;
  } catch (e) {
    console.log("error", e);
    throw e;
  }
};

export { generateLink, signupuser, signinuser };
