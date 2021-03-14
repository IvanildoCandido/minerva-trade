import styled from 'styled-components';

export const ModalArea = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background-color: white;
    color: black;
    width: 60%;
    height: 60%;
    border-radius: 20px;
  }
  .close {
    background-color: transparent;
    border: none;
    outline: 0;
    width: 32px;
    height: 32px;
    right: calc(-100% + 64px);
    top: 16px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    &:before,
    &:after {
      content: ' ';
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: black;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`;
