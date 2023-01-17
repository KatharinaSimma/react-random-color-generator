/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';

const buttonStyle = css`
  background-color: grey;
  margin-top: 1em;
  padding: 0.5em 1.5em;
  border-radius: 0.3em;
  border: 3px solid #c5c5ce;
  font-size: 2em;
`;

export default function GenerateButton(props) {
  return (
    <button
      css={buttonStyle}
      onClick={() => {
        props.setColor(
          randomColor({
            luminosity: props.luminosity,
            hue: props.hue,
          }),
        );
      }}
    >
      Generate
    </button>
  );
}
