export default function SizeControl(props) {
  return (
    <div>
      <h2>Style your box!</h2>
      Width:
      <input
        onChange={(event) => {
          props.setWidth(event.currentTarget.value);
        }}
        type="number"
        id="width"
        name="width"
        min="20"
        max="100"
        value={props.width}
      />
      Height:
      <input
        onChange={(event) => {
          props.setHeight(event.currentTarget.value);
        }}
        type="number"
        id="height"
        name="height"
        min="20"
        max="60"
        value={props.height}
      />
    </div>
  );
}
