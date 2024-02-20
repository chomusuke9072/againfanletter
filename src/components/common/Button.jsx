import styled, { css } from "styled-components";

export default function Button({ size = "small", text, onClick = () => {} }) {
  return (
    <BtnWrapper size={size}>
      <button onClick={onClick}>{text}</button>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    background-color: #464646;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    ${(props) => {
      if (props.size === "large") {
        return css`
          padding: 0.5rem 1rem;
          width: 100%;
        `;
      }
      return css`
        padding: 0.3rem 0.8rem;
        width: auto;
      `;
    }}
  }
`;
