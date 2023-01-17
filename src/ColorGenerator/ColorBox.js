/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Resizable } from 're-resizable';

const boxStyle = (color, invertedColor) => css`
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex-center;
  justify-content: flex-center;
  align-items: center;
  background-color: ${color};
  transition: all 2s ease-out;
  font-size: 1.5em;
  border-radius: 0.3em;
  color: ${invertedColor};
`;

const resizeStyle = css`
  margin: 2em auto;
`;

// get inverted color
// adapted from https://jsfiddle.net/salman/f9Re3/
export default function ColorBox(props) {
  let invertedColor = props.color;
  invertedColor = 0xffffff ^ parseInt(invertedColor.slice(1), 16);
  invertedColor = '#' + invertedColor.toString(16).padStart(6, 0);

  return (
    <Resizable
      defaultSize={{
        width: 700,
        height: 200,
      }}
      maxWidth="100vw"
      maxHeight="50vw"
      minWidth="30%"
      minHeight="100px"
      css={resizeStyle}
    >
      <div css={boxStyle(props.color, invertedColor)}>
        Generated Color: {props.color}
      </div>
    </Resizable>
  );
}
