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
  background-color: transparent;
  color: #c5c5ce;
  margin: 0.2em;
  padding: 0.1em 0.5em;
  border-radius: 0.3em;
  border: 1px solid #c5c5ce;
  border-width: ${activeColor === hue ? '3px' : '1px'};
  font-size: ${activeColor === hue ? '1.5em' : '1em'}; ;
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
