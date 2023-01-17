/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputStyle = css`
  background-color: transparent;
  border: 1px solid #c5c5ce;
  color: #c5c5ce;
  border-radius: 0.3em;
  margin: 0.2em;
  padding: 0.2em 0.5em;
  &:focus {
    border: 2px solid #c5c5ce;
  }
  font-size: 1.4em;
`;
const labelStyle = css`
  font-size: 1.4em;
`;

export default function SizeControl(props) {
  return (
    <div>
      <h2>Style your box!</h2>
      <span css={labelStyle}>Width:</span>
      <input
        onChange={(event) => {
          props.setWidth(event.currentTarget.value);
        }}
        type="number"
        id="width"
        name="width"
        min="20"
        max="100"
        value={props.width}
        css={inputStyle}
      />
      <span css={labelStyle}>Height:</span>
      <input
        onChange={(event) => {
          props.setHeight(event.currentTarget.value);
        }}
        type="number"
        id="height"
        name="height"
        min="20"
        max="60"
        value={props.height}
        css={inputStyle}
      />
    </div>
  );
}
