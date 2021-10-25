import "./App.css";
import ContactForm from "./Components/DishesForm";

import { Form } from "./Components/Form";
function App() {
  const submit = (values) => {
    // print the form values to the console
    console.log(values);
  };
  const onSaveProperty = async (property) => {};
  return (
    <div>
      <Form formSubmit={onSaveProperty} />
      <ContactForm onSubmit={submit} />
    </div>
  );
}

export default App;
