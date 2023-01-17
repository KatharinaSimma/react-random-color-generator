const luminosities = ['random', 'bright', 'light', 'dark'];

export default function LuminosityControl(props) {
  const luminosityButtons = luminosities.map((l) => {
    return (
      <button key={l} onClick={() => props.setLuminosity(l)}>
        {l}
      </button>
    );
  });
  console.log('luminosity', props.luminosity);
  return (
    <div>
      <h2>Choose your luminosity</h2>
      {luminosityButtons}
    </div>
  );
}
