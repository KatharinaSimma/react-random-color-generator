/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const boxStyle = (height, width, color, invertedColor) => css`
  height: ${height}vh;
  width: ${width}vw;
  max-height: 60vh;
  max-width: 100vw;
  margin: 2em auto 0 auto;
  display: flex-center;
  justify-content: flex-center;
  align-items: center;
  background-color: ${color};
  transition: all 2s ease-out;
  font-size: 1.5em;
  border-radius: 0.3em;
  color: ${invertedColor};
`;

// get inverted color
// adapted from https://jsfiddle.net/salman/f9Re3/
export default function ColorBox(props) {
  let invertedColor = props.color;
  invertedColor = 0xffffff ^ parseInt(invertedColor.slice(1), 16);
  invertedColor = '#' + invertedColor.toString(16).padStart(6, 0);

  return (
    <div css={boxStyle(props.height, props.width, props.color, invertedColor)}>
      Generated Color: {props.color}
    </div>
  );
}
