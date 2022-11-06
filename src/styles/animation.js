import styled, { css, keyframes } from "styled-components";

const fadeinKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
}
to {
  filter: blur(0);
  opacity: 1;
}
`;
const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) => {
  return css`
    animation: ${time} ${fadeinKeyframes} ${type};
  `;
};
export const spinLoader = ({ time = "1s", type = "ease" } = {}) => {
  return css`
    animation: ${time} ${Spin} ${type} infinite;
  `;
};
