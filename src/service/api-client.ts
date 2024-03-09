import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1935f87a4748424b84d3e27371319d61",
  },
});
