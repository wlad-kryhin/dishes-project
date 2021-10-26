// import { useState } from "react";

// EXAMPLE WITH REACT_HOOKS ///// <~~~~~~~

// export default function Form({ formSubmit }) {
//   const [name, setName] = useState("");
//   const [time, setTime] = useState("");
//   const [dishes, setDishes] = useState("pizza");
//   const [diameter, setDiameter] = useState(0);
//   const [bread, setBread] = useState(0);
//   const [slice, setSlice] = useState(0);
//   const [range, setRange] = useState(0);

//   const reset = () => {
//     setName("");
//     setTime("");
//     setDishes("pizza");
//     setDiameter(0);
//     setBread(0);
//     setSlice(0);
//     setRange(0);
//   };
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (dishes === "sandwich") {
//       formSubmit({
//         name,
//         preparation_time: time,
//         type: dishes,
//         no_of_slices: Number(bread),
//       });

//       reset();
//     }
//     if (dishes === "soup") {
//       formSubmit({
//         name,
//         preparation_time: time,
//         type: dishes,
//         slices_of_bread: Number(range),
//       });

//       reset();
//     }
//     if (dishes === "pizza") {
//       formSubmit({
//         name,
//         preparation_time: time,
//         type: dishes,
//         diameter: Number(diameter),
//         no_of_slices: Number(slice),
//       });

//       reset();
//     }
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "preparation_time":
//         setTime(value);
//         break;
//       case "type":
//         setDishes(value);
//         break;
//       case "diameter":
//         setDiameter(value);
//         break;
//       case "slice":
//         setSlice(value);
//         break;
//       case "bread":
//         setBread(value);
//         break;
//       case "Spiciness scale":
//         setRange(value);
//         break;

//       default:
//         return;
//     }
//   };
//   // useEffect(() => {
//   //   console.log(state);
//   // }, [state]);

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <h2>Dishes order form</h2>
//       <label>
//         Dish name
//         <input
//           onChange={handleInputChange}
//           component="input"
//           value={name}
//           type="text"
//           name="name"
//           placeholder="name"
//           required
//         />
//       </label>
//       <label>
//         Preparation time
//         <input
//           value={time}
//           onChange={handleInputChange}
//           component="input"
//           type="time"
//           name="preparation_time"
//           step="1"
//           min="00:00:00"
//           max="24:00:00"
//           required
//         />
//       </label>
//       <label>
//         Dish type
//         <select
//           name="type"
//           value={dishes}
//           onChange={handleInputChange}
//           required
//         >
//           <option value="pizza">Pizza</option>
//           <option value="soup">Soup</option>
//           <option value="sandwich">Sandwich</option>
//         </select>
//       </label>
//       {dishes === "pizza" && (
//         <>
//           <label>
//             {" "}
//             No of slice
//             <input
//               value={slice}
//               component="input"
//               type="number"
//               name="slice"
//               required
//               onChange={handleInputChange}
//             />
//           </label>
//           <label>
//             Diameter{" "}
//             <input
//               value={diameter}
//               onChange={handleInputChange}
//               name="diameter"
//               component="input"
//               type="number"
//               pattern="\d+(\.\d*)?"
//               min="0"
//               max="100"
//               step="0.2"
//               required
//             />{" "}
//           </label>
//         </>
//       )}
//       {dishes === "sandwich" && (
//         <>
//           <label>
//             Slices of bread
//             <input
//               value={bread}
//               onChange={handleInputChange}
//               component="input"
//               type="number"
//               name="bread"
//               required
//               min="0"
//               max="20"
//               step="1"
//             />
//           </label>
//         </>
//       )}
//       {dishes === "soup" && (
//         <>
//           <label>
//             Spiciness scale
//             <input
//               value={range}
//               component="input"
//               onInput={handleInputChange}
//               type="range"
//               name="spiciness_scale"
//               min="0"
//               max="10"
//               step="1"
//               required
//             />
//             <span>{range}</span>
//           </label>
//         </>
//       )}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
