import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

const hues = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'monochrome',
  'random',
];

const luminosities = ['bright', 'light', 'dark', 'random'];

function App() {
  const [hue, setHue] = useState('random');
  const [luminosity, setLuminosity] = useState('random');
  const [color, setColor] = useState(
    randomColor({
      luminosity: luminosity,
      hue: hue,
    }),
  );
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);

  return (
    <>
      <h1>Random Color Generator</h1>
      <p>This is my awesome Color Generator. Try it out!</p>
      <h2>Choose your hue</h2>
      {hues.map((h) => {
        return (
          <button
            key={h}
            onClick={() => setHue(h)}
            css={{ backgroundColor: h, border: 'none' }}
          >
            {h}
          </button>
        );
      })}
      <h2>Choose your luminosity</h2>
      {luminosities.map((l) => {
        return (
          <button key={l} onClick={() => setLuminosity(l)}>
            {l}
          </button>
        );
      })}
      <br />
      <button
        onClick={() => {
          setColor(
            randomColor({
              luminosity: luminosity,
              hue: hue,
            }),
          );
        }}
      >
        Generate
      </button>
      <div>
        <h2>Style your box!</h2>
        Width:
        <input
          onChange={(event) => {
            setWidth(event.currentTarget.value);
          }}
          type="number"
          id="width"
          name="width"
          min="20"
          max="100"
          value={width}
        />
        Height:
        <input
          onChange={(event) => {
            setHeight(event.currentTarget.value);
          }}
          type="number"
          id="height"
          name="height"
          min="20"
          max="60"
          value={height}
        />
      </div>
      <div
        style={{
          height: height + 'vh',
          width: width + 'vw',
          maxHeight: '60vh',
          maxWidth: '100vw',
          textAlign: 'center',
          verticalAlign: 'center',
          backgroundColor: color,
        }}
      >
        <span style={{ color: color, filter: 'invert(100%)' }}>
          Generated Color: {color}
        </span>
      </div>
    </>
  );
}

export default App;
