import "./App.css";
import DishesForm from "./Components/DishesForm";
import { fetchDishes } from "./Redux/operation";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const submit = (values) => {
    dispatch(fetchDishes(values));
  };
  return (
    <div>
      <DishesForm onSubmit={submit} />
    </div>
  );
}

export default App;
