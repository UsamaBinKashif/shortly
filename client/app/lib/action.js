import axios from "axios";
import { BASE_URL } from "./constants";

const getData = async () => {
  try {
    const { data } = await axios({
      url: "https://rel-ink.vercel.app/",
      method: "GET",
      secure: true,
    });
    return data.data;
  } catch (e) {
    console.log("error while fetching data", e.message);
    throw e;
  }
};

const generateLink = async ( url ) => {
  const requestData = {
    url: url,
  };
  try {
    console.log('Request Data:', requestData); // Log to check if 'url' is present in the requestData object
    const { data } = await axios({
      url: `http://localhost:8080/url`,
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

export { getData, generateLink };
