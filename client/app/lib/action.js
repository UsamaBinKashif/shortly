import axios from "axios";



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

export { getData };
