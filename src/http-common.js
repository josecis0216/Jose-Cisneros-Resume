import axios from '../node_modules/axios';

export default axios.create({
  baseURL: "https://jose-jobs-api.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});