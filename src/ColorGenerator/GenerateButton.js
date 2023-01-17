import randomColor from 'randomcolor';

export default function GenerateButton(props) {
  console.log('Generate', props.hue, props.luminosity);
  return (
    <button
      onClick={() => {
        props.setColor(
          randomColor({
            luminosity: props.luminosity,
            hue: props.hue,
          }),
        );
      }}
    >
      Generate
    </button>
  );
}
