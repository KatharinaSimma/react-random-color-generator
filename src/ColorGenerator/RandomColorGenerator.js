/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import randomColor from 'randomcolor';
import { useState } from 'react';
import ColorBox from './ColorBox';
import GenerateButton from './GenerateButton';
import HueControl from './HueControl';
import LuminosityControl from './LuminosityControl';
import SizeControl from './SizeControl';

const randomColorGeneratorStyle = css`
  text-align: center;
`;

const lineStyle = (color) => css`
  border: 1px solid ${color};
  width: 65%;
  background-color: ${color};
  transition: all 2s ease-out;
`;

function RandomColorGenerator() {
  const [hue, setHue] = useState('random');
  const [luminosity, setLuminosity] = useState('random');
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(30);
  const [color, setColor] = useState(
    randomColor({
      luminosity: luminosity,
      hue: hue,
    }),
  );

  return (
    <div css={randomColorGeneratorStyle}>
      <h1>Random Color Generator</h1>
      <p>This is my awesome Color Generator. Try it!</p>
      <hr css={lineStyle(color)} />
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
    </div>
  );
}

export default RandomColorGenerator;