import randomColor from 'randomcolor';
import { useState } from 'react';
import ColorBox from './ColorBox';
import GenerateButton from './GenerateButton';
import HueControl from './HueControl';
import LuminosityControl from './LuminosityControl';
import SizeControl from './SizeControl';

function RandomColorGenerator() {
  const [hue, setHue] = useState('random');
  const [luminosity, setLuminosity] = useState('random');
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);
  const [color, setColor] = useState(
    randomColor({
      luminosity: luminosity,
      hue: hue,
    }),
  );

  return (
    <>
      <h1>Random Color Generator</h1>
      <p>This is my awesome Color Generator. Try it!</p>

      <HueControl setHue={setHue} hue={hue} />

      <LuminosityControl
        setLuminosity={setLuminosity}
        luminosity={luminosity}
      />

      <SizeControl
        width={width}
        height={height}
        setHeight={setHeight}
        setWidth={setWidth}
      />

      <GenerateButton setColor={setColor} hue={hue} luminosity={luminosity} />

      <ColorBox height={height} width={width} color={color} />
    </>
  );
}

export default RandomColorGenerator;
