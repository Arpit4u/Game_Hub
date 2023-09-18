import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0e6f1ab28c2f4dfa905fbfd30af2e339",
  },
});
