/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const hues = [
  'random',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'monochrome',
];

const buttonStyle = (hue, activeColor) => css`
  background-color: ${activeColor === hue ? '#c5c5ce' : 'transparent'};
  color: ${activeColor === hue ? '#27272c;' : '#c5c5ce'};
  margin: 0.2em;
  padding: 0.4em 0.5em;
  border-radius: 0.3em;
  border: 1px solid #c5c5ce;
  font-size: 1.2em;
`;

const hueControlStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  margin: auto;
`;

export default function HueControl(props) {
  return (
    <div>
      <h2>Choose your hue</h2>
      <div css={hueControlStyle}>
        {hues.map((hue) => {
          return (
            <button
              css={buttonStyle(hue, props.hue)}
              key={hue}
              onClick={() => props.setHue(hue)}
            >
              {hue}
            </button>
          );
        })}
      </div>
    </div>
  );
}
