/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const boxStyle = (height, width, color) => css`
  height: ${height}vh;
  width: ${width}vw;
  max-height: 60vh;
  max-width: 100vw;
  margin: 2em auto;
  padding: -1;
  display: flex-center;
  justify-content: flex-center;
  align-items: center;
  background-color: ${color};
  transition: background-color 2s ease-out;
`;

const textStyle = (color) => css`
  color: ${color};
  filter: invert(100%);
  transition: all 2s ease-out;
`;

export default function ColorBox(props) {
  return (
    <div css={boxStyle(props.height, props.width, props.color)}>
      <span css={textStyle(props.color)}>Generated Color: {props.color}</span>
    </div>
  );
}
