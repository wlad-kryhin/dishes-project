export default function Input({ handleChangeInput, value, name }) {
  return (
    <label>
      <input
        onChange={(e) => handleChangeInput(e, name)}
        value={value}
        name={name}
      />
    </label>
  );
}
