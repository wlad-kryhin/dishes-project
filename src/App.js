import "./App.css";
import DishesForm from "./Components/DishesForm";
import { fetchDishes } from "./Redux/operation";
import { useDispatch } from "react-redux";
import s from "./Components/Form.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const submit = (values) => {
    dispatch(fetchDishes(values));
  };
  return (
    <div className={s.container}>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <DishesForm onSubmit={submit} />
    </div>
  );
}

export default App;
