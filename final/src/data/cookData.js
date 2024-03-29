import axios from "axios";

export async function fetchCooks() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}user/cook`);
    if (data) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}