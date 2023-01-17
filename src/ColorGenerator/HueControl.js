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
  background-color: grey;
  margin: 0.2em;
  padding: 0.2em 0.5em;
  border-radius: 0.3em;
  color: ${hue};
  border: 3px solid grey;
  border-color: ${activeColor === hue ? '#c5c5ce' : 'none'};
  font-size: 1.4em;
`;

const hueControlStyle = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: auto;
`;

export default function HueControl(props) {
  return (
    <div>
      <h2>Choose your hue</h2>
      <div css={hueControlStyle}>
        {hues.map((h) => {
          return (
            <button
              css={buttonStyle(h, props.hue)}
              key={h}
              onClick={() => props.setHue(h)}
            >
              {h}
            </button>
          );
        })}
      </div>
    </div>
  );
}
