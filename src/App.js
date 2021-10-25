import "./App.css";
import axios from "axios";

import { Form } from "./Components/Form";
function App() {
  const onSaveProperty = async (property) => {
    console.log(property);
    const value = JSON.stringify(property);
    const data = await axios.post(
      "http://frosty-wood-6558.getsandbox.com:443/dishes",
      value,
    );
    console.log(data);
  };
  return (
    <div>
      <Form formSubmit={onSaveProperty} />
    </div>
  );
}

export default App;
