/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const luminosities = ['random', 'light', 'dark'];

const buttonStyle = (luminosity, activeLuminosity) => css`
  background-color: ${activeLuminosity === luminosity
    ? '#c5c5ce'
    : 'transparent'};
  color: ${activeLuminosity === luminosity ? '#27272c;' : '#c5c5ce'};
  margin: 0.2em;
  padding: 0.4em 0.5em;
  border-radius: 0.3em;
  border: 1px solid #c5c5ce;
  font-size: 1.2em;
  width: 50%;
`;

const luminosityControlStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 691px) {
    flex-direction: column;
  }
`;

export default function LuminosityControl(props) {
  return (
    <div>
      <h2>Choose your luminosity</h2>
      <div css={luminosityControlStyle}>
        {luminosities.map((luminosity) => {
          return (
            <button
              css={buttonStyle(luminosity, props.luminosity)}
              key={luminosity}
              onClick={() => props.setLuminosity(luminosity)}
            >
              {luminosity}
            </button>
          );
        })}
      </div>
    </div>
  );
}
