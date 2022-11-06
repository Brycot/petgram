import styled from "styled-components";
import { spinLoader } from "../../styles/animation";

export const Form = styled.form`
  padding: 16px 10px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`;

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  padding: 8px;
`;
export const Error = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: red;
`;
export const Loader = styled.div`
  display: inline-block;
  &::after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    margin: 8px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff transparent #fff transparent;
    ${spinLoader({ time: "1.2s", type: "linear" })}
  }
`;
