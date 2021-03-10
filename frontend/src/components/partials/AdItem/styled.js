import styled from 'styled-components';

export const Item = styled.div`
  a {
    display: block;
    border: 1px solid white;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: black;
    background-color: white;
    transition: all ease 0.5s;
    &:hover {
      box-shadow: 5px 5px 5px #ccc;
    }
    .item-image img {
      width: 100%;
      border-radius: 5px;
    }
    .item-name {
      font-weight: bold;
    }
  }
`;
