import axios from "axios";

export async function fetchCategory() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}category`);
    if (data) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}