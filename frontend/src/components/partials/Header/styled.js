import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #ccc;
  a {
    text-decoration: none;
  }
  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
  }
  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;
    img {
      height: 50px;
    }
  }
  nav {
    padding-top: 10px;
    padding-bottom: 10px;
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }
    li {
      margin-left: 20px;
      margin-right: 20px;
      a,
      button {
        border: 0;
        background: none;
        cursor: pointer;
        outline: 0;
        color: #000;
        font-size: 14px;
        &:hover {
          color: #999;
        }
        &.button {
          background-color: #ff8100;
          border-radius: 5px;
          color: #fff;
          padding: 5px 10px;
          &:hover {
            background-color: #e57706;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    & {
      height: auto;
    }
    .container {
      flex-direction: column;
    }
    .logo {
      justify-content: center;
      margin: 10px 0;
    }
    nav ul {
      flex-direction: column;
      height: auto;
    }
    nav li {
      margin: 5px;
    }
  }
`;
