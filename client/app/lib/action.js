import axios from "axios";
const getData = () => {
  axios({
    method: "get",
    url: "https://rel-ink.vercel.app/",
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export { getData };
