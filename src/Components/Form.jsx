import { useState } from "react";
// import { reduxForm, input } from "redux-form";
export const Form = ({ formSubmit }) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [dishes, setDishes] = useState("pizza");
  const [diameter, setDiameter] = useState("");
  const [bread, setBread] = useState("");
  const [slice, setSlice] = useState("");
  const [range, setRange] = useState(0);

  const reset = () => {
    setName("");
    setTime("");
    setDishes("pizza");
    setDiameter("");
    setBread("");
    setSlice("");
    setRange(5);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (dishes === "sandwich") {
      formSubmit({
        name,
        preparation_time: time,
        type: dishes,
        no_of_slices: bread,
      });

      reset();
    }
    if (dishes === "soup") {
      formSubmit({
        name,
        preparation_time: time,
        type: dishes,
        slices_of_bread: range,
      });

      reset();
    }
    if (dishes === "pizza") {
      formSubmit({
        name,
        preparation_time: time,
        type: dishes,
        diameter,
        no_of_slices: slice,
      });

      reset();
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "preparation_time":
        setTime(value);
        break;
      case "type":
        setDishes(value);
        break;
      case "diameter":
        setDiameter(value);
        break;
      case "slice":
        setSlice(value);
        break;
      case "bread":
        setBread(value);
        break;
      case "Spiciness scale":
        setRange(value);
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Dishes order form</h2>
      <label>
        Dish name
        <input
          onChange={handleInputChange}
          component="input"
          value={name}
          type="text"
          name="name"
          placeholder="name"
          required
        />
      </label>
      <label>
        Preparation time
        <input
          value={time}
          onChange={handleInputChange}
          component="input"
          type="time"
          name="preparation_time"
          step="1"
          min="00:00:00"
          max="24:00:00"
          required
        />
      </label>
      <label for="size">
        Dish type
        <select
          id="size"
          name="type"
          value={dishes}
          onChange={handleInputChange}
          required
        >
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </select>
      </label>
      {dishes === "pizza" && (
        <>
          <label>
            {" "}
            No of slice
            <input
              value={slice}
              component="input"
              type="number"
              name="slice"
              required
              onChange={handleInputChange}
            />
          </label>
          <label>
            Diameter{" "}
            <input
              value={diameter}
              onChange={handleInputChange}
              name="diameter"
              component="input"
              type="number"
              pattern="\d+(\.\d*)?"
              min="0"
              max="100"
              step="0.2"
              required
            />{" "}
          </label>
        </>
      )}
      {dishes === "sandwich" && (
        <>
          <label>
            Slices of bread
            <input
              value={bread}
              onChange={handleInputChange}
              component="input"
              type="number"
              name="bread"
              required
              min="0"
              max="20"
              step="1"
            />
          </label>
        </>
      )}
      {dishes === "soup" && (
        <>
          <label>
            Spiciness scale
            <input
              value={range}
              component="input"
              onInput={handleInputChange}
              type="range"
              name="Spiciness scale"
              min="0"
              max="10"
              step="1"
              required
            />
            <span>{range}</span>
          </label>
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
//     <form>
//       <label>
//         Dish name
//         <input type="text" name="name" placeholder="name" required />
//       </label>
//       <label>
//         Preparation time
//         <input
//           type="time"
//           name="time"
//           step="1"
//           min="00:00:00"
//           max="20:00:00"
//           required
//         />
//       </label>
//       <label for="size">Dish type </label>
//       <select
//         id="size"
//         name="dishes"
//         value={selectName}
//         onChange={handleSelectChange}
//         required
//       >
//         <option value="pizza">Pizza</option>
//         <option value="soup">Soup</option>
//         <option value="sandwich" selected>
//           Sandwich
//         </option>
//       </select>
//       {selectName === "pizza" && (
//         <>
//           <label>
//             No of slice
//             <input type="number" name="noofslice" required />
//           </label>
//           <label>
//             Diameter
//             <input
//               type="number"
//               pattern="\d+(\.\d*)?"
//               min="0"
//               max="100"
//               step="0.2"
//               required
//             />
//           </label>
//         </>
//       )}
//       {selectName === "sandwich" && (
//         <>
//           <label>
//             Slices of bread
//             <input type="number" name="sliceOfBread" required />
//           </label>
//         </>
//       )}
//       {selectName === "soup" && (
//         <>
//           <label>
//             Spiciness scale
//             <input
//               onInput={handleRangeChange}
//               type="range"
//               name="Spiciness scale"
//               min="0"
//               max="10"
//               step="1"
//               required
//             />
//             <span>{range}</span>
//           </label>
//         </>
//       )}
//     </form>
//   );

// export default reduxForm({
//   form: "dishes",
// })(Form);
