/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const luminosities = ['random', /* 'bright', */ 'light', 'dark'];

const buttonStyle = (l, activeLuminosity) => css`
  background-color: grey;
  margin: 0.2em;
  padding: 0.2em 0.5em;
  border-radius: 0.3em;
  border: 3px solid grey;
  border-color: ${activeLuminosity === l ? '#c5c5ce' : 'none'};
  font-size: 1.4em;
`;

export default function LuminosityControl(props) {
  return (
    <div>
      <h2>Choose your luminosity</h2>
      <div>
        {luminosities.map((l) => {
          return (
            <button
              css={buttonStyle(l, props.luminosity)}
              key={l}
              onClick={() => props.setLuminosity(l)}
            >
              {l}
            </button>
          );
        })}
      </div>
    </div>
  );
}
