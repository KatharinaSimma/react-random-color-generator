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
  console.log(hue, luminosity);
  console.log(color);

  return (
    <>
      <h1>Random Color Generator</h1>
      <p>This is my awesome Color Generator. Try it out!</p>
      <h2>Choose your hue</h2>
      {hues.map((h) => {
        return (
          <button key={h} onClick={() => setHue(h)}>
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
      <div
        style={{
          height: '100px',
          width: '200px',
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
