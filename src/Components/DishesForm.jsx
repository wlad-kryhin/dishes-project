import React from "react";
import { Field, reduxForm } from "redux-form";
import { useState } from "react";
import s from "./Form.module.css";

let DishesForm = (props) => {
  const [typeDishes, setTypeDishes] = useState("Select type");
  const selectChange = (e) => {
    setTypeDishes(e.target.value);
  };
  const { handleSubmit, reset, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h2 className={s.form_title}>Dishes order form</h2>

      <label className={s.label} htmlFor="name">
        Name
      </label>
      <Field
        id="name"
        className={s.field}
        name="name"
        component="input"
        type="text"
        required
        placeholder="Name"
      />

      <label className={s.label} htmlFor="preparation_time">
        Preparation time
      </label>
      <Field
        id="preparation_time"
        className={s.field}
        name="preparation_time"
        component="input"
        type="time"
        step="1"
        min="00:00:00"
        max="24:00:00"
        required
        placeholder="00:00:00"
      />

      <label className={s.label} htmlFor="type">
        Select type
      </label>
      <Field
        id="type"
        className={s.field}
        name="type"
        component="select"
        required
        onChange={selectChange}
      >
        <option value="type">Select type</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </Field>
      {typeDishes === "pizza" && (
        <>
          <label className={s.label} htmlFor="no_of_slices">
            Number of Slices
          </label>
          <Field
            id="no_of_slices"
            className={s.field}
            component="input"
            type="number"
            name="no_of_slices"
            required
            min="1"
            max="10"
            step="1"
            placeholder="0-10"
            parse={(value) => +value}
          />

          <label className={s.label} htmlFor="diameter">
            Diameter
          </label>
          <Field
            id="diameter"
            className={s.field}
            name="diameter"
            component="input"
            type="number"
            pattern="\d+(\.\d*)?"
            min="0"
            max="100"
            step="0.2"
            required
            placeholder="0-100"
            parse={(value) => +value}
          />
        </>
      )}
      {typeDishes === "soup" && (
        <>
          <label className={s.label} htmlFor="spiciness_scale">
            Spiciness scale{" "}
          </label>
          <Field
            id="spiciness_scale"
            className={s.field}
            component="input"
            type="number"
            name="spiciness_scale"
            min="0"
            max="10"
            step="1"
            required
            placeholder="0-10"
            parse={(value) => +value}
          />
        </>
      )}
      {typeDishes === "sandwich" && (
        <>
          <label className={s.label} htmlFor="slices_of_bread ">
            Slices of bread{" "}
          </label>
          <Field
            id="slices_of_bread"
            className={s.field}
            component="input"
            type="number"
            name="slices_of_bread"
            required
            min="0"
            max="20"
            step="1"
            placeholder="0-20"
            parse={(value) => +value}
          />
        </>
      )}
      <div className={s.button_container}>
        <button
          className={s.button}
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
        <button
          className={s.button}
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear form
        </button>
      </div>
    </form>
  );
};

DishesForm = reduxForm({
  form: "dishes",
  destroyOnUnmount: false,
})(DishesForm);

export default DishesForm;
