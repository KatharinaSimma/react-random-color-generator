/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import randomColor from 'randomcolor';
import { useState } from 'react';
import ColorBox from './ColorBox';
import GenerateButton from './GenerateButton';
import HueControl from './HueControl';
import LuminosityControl from './LuminosityControl';

const randomColorGeneratorStyle = css`
  text-align: center;
`;

const lineStyle = (color) => css`
  border: 1px solid ${color};
  width: 65%;
  background-color: ${color};
  transition: all 2s ease-out;
`;

const controlsStyle = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

function RandomColorGenerator() {
  const [hue, setHue] = useState('random');
  const [luminosity, setLuminosity] = useState('random');
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

      <div css={controlsStyle}>
        <HueControl setHue={setHue} hue={hue} />
        <LuminosityControl
          setLuminosity={setLuminosity}
          luminosity={luminosity}
        />
      </div>

      <GenerateButton setColor={setColor} hue={hue} luminosity={luminosity} />

      <ColorBox color={color} />
    </div>
  );
}

export default RandomColorGenerator;
