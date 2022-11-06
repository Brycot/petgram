import styled, { css, keyframes } from "styled-components";

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }
  100% {
    top: 20px;
  }
`;

export const bounceDown = ({ time = ".25s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames} ${type};
  `;

export const List = styled.ul`
  ${bounceDown()}
  display: flex;
  overflow-y: auto;
  width: 100%;
  scrollbar-width: none;
  margin-bottom: 20px;
  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 40px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      min-width: 350px;
      max-width: 450px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: 20px;
      transform: scale(0.9);
      z-index: 1;
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
