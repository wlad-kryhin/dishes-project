import React from "react";
import { Field, reduxForm } from "redux-form";
import { useState } from "react";

let DishesForm = (props) => {
  const [typeDishes, setTypeDishes] = useState("type");
  const selectChange = (e) => {
    setTypeDishes(e.target.value);
  };
  console.log(props);
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Dishes order form</h2>

      <label htmlFor="name">Name</label>
      <Field name="name" component="input" type="text" required />

      <label htmlFor="preparation_time">Preparation time</label>
      <Field
        name="preparation_time"
        component="input"
        type="time"
        step="1"
        min="00:00:00"
        max="24:00:00"
        required
      />

      <label htmlFor="type">Select type</label>
      <Field name="type" component="select" required onChange={selectChange}>
        <option value="type">Type</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </Field>
      {typeDishes === "pizza" && (
        <>
          <label htmlFor="no_of_slices">No of Slices</label>
          <Field
            component="input"
            type="number"
            name="no_of_slices"
            required
            parse={(value) => +value}
          />

          <label htmlFor="diameter">Diameter</label>
          <Field
            name="diameter"
            component="input"
            type="number"
            pattern="\d+(\.\d*)?"
            min="0"
            max="100"
            step="0.2"
            required
            parse={(value) => +value}
          />
        </>
      )}
      {typeDishes === "soup" && (
        <>
          <label htmlFor="spiciness_scale">Spiciness scale </label>
          <Field
            component="input"
            type="number"
            name="spiciness_scale"
            min="0"
            max="10"
            step="1"
            required
            parse={(value) => +value}
          />
        </>
      )}
      {typeDishes === "sandwich" && (
        <>
          <label htmlFor="slices_of_bread ">Slices_of_bread </label>
          <Field
            component="input"
            type="number"
            name="slices_of_bread"
            required
            min="0"
            max="20"
            step="1"
            parse={(value) => +value}
          />
        </>
      )}

      <button type="submit">Submit</button>
      <button type="button" onClick={reset}>
        Clear Values
      </button>
    </form>
  );
};

DishesForm = reduxForm({
  form: "dishes",
  destroyOnUnmount: false,
})(DishesForm);

export default DishesForm;
