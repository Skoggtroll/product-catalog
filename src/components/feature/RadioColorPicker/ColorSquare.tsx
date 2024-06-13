import styled from "styled-components";

interface ColorSquareProps {
  color: string;
  active?: boolean;
}

export const ColorSquare = styled.div<ColorSquareProps>`
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: 1px solid;
  border-radius: 20%;
  width: 1rem;
  height: 1rem;
  ${(props) => props.active && `box-shadow: 0 0 5px;`}
`;
