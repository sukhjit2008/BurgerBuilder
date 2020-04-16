import axios from "axios";
const instance = axios.create({
  baseURL: "https://burgerbuilder-f8b38.firebaseio.com/"
});

export default instance;
