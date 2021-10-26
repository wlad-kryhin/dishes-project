import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const fetchDishes = createAsyncThunk("fetchDishes", async (values) => {
  try {
    const { data } = await axios.post(
      "https://frosty-wood-6558.getsandbox.com:443/dishes",
      values,
    );
    return toast.success(`Your order ${data.type} is accepted, Bon appetit!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    return toast.error("Please enter correct dish data", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
});
