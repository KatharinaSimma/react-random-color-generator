/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const luminosities = ['random', /* 'bright', */ 'light', 'dark'];

const buttonStyle = (l, activeLuminosity) => css`
  background-color: transparent;
  color: #c5c5ce;
  margin: 0.2em;
  padding: 0.1em 0.5em;
  border-radius: 0.3em;
  border: 1px solid #c5c5ce;
  border-width: ${activeLuminosity === l ? '3px' : '1px'};
  font-size: ${activeLuminosity === l ? '1.5em' : '1em'};
`;

const luminosityControlStyle = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: auto;
`;

export default function LuminosityControl(props) {
  return (
    <div>
      <h2>Choose your luminosity</h2>
      <div css={luminosityControlStyle}>
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
