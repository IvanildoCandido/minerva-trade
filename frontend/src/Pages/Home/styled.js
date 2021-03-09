import styled from 'styled-components';
export const SearchArea = styled.div`
  background-color: #ddd;
  margin-bottom: #ccc;
  padding: 20px 0;
  .search-box {
    background-color: #9bb83c;
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
    display: flex;
    form {
      flex: 1;
      display: flex;
      input,
      select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: black;
        margin-right: 20px;
      }
      input {
        flex: 1;
        padding-left: 10px;
      }
      select {
        width: 100px;
      }
      button {
        background-color: #49aeef;
        font-size: 15px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        color: #fff;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
      }
    }
  }
  .category-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .category-item {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      text-decoration: none;
      height: 50px;
      margin-bottom: 10px;
      &:hover {
        color: #999;
      }
      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  }
`;
export const PageArea = styled.div``;
