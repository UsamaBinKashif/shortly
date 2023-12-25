import axios from "axios";
import { BASE_URL } from "./constants";

const generateLink = async (url) => {
  const requestData = {
    url: url,
  };
  try {
    console.log("Request Data:", requestData); // Log to check if 'url' is present in the requestData object
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

export { generateLink };
