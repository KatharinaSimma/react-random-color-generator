const hues = [
  'random',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'mono-chrome',
];

export default function HueControl(props) {
  const hueButtons = hues.map((h) => {
    return (
      <button
        {...(h === 'random' ? 'focus' : null)}
        key={h}
        onClick={() => props.setHue(h)}
        style={
          {
            // backgroundColor: h,
            // border: 'none',
            // height: '50px',
            // width: '50px',
            // borderRadius: '50%',
          }
        }
      >
        {h}
      </button>
    );
  });
  console.log('hue', props.hue);
  return (
    <div>
      <h2>Choose your hue</h2>
      {hueButtons}
    </div>
  );
}
