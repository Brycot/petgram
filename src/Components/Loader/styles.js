import styled, { css, keyframes } from "styled-components";

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(460px);
  }
`;

export const SkeletonItem = styled.li`
  background-color: rgb(218, 218, 218);
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

export const SkeletonImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

export const SkeletonInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

export const SkeletonName = styled.div`
  width: 70%;
  height: 18px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;
