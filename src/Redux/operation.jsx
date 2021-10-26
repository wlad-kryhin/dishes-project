import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
console.log(axios);

export const fetchDishes = createAsyncThunk("fetchDishes", async (values) => {
  try {
    const data = await axios.post(
      "https://frosty-wood-6558.getsandbox.com:443/dishes",
      values,
    );
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
});
