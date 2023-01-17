export default function ColorBox(props) {
  return (
    <div
      style={{
        height: props.height + 'vh',
        width: props.width + 'vw',
        maxHeight: '60vh',
        maxWidth: '100vw',
        textAlign: 'center',
        verticalAlign: 'center',
        backgroundColor: props.color,
        transition: 'background-color 2s ease-out',
      }}
    >
      <span
        style={{
          color: props.color,
          filter: 'invert(100%)',
          transition: 'color 2s ease-out',
        }}
      >
        Generated Color: {props.color}
      </span>
    </div>
  );
}
