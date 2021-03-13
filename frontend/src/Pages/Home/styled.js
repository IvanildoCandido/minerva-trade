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
  @media (max-width: 600px) {
    .search-box form {
      flex-direction: column;
      input {
        padding: 10px;
        margin-right: 0;
        margin-bottom: 10px;
      }
      select {
        width: 100%;
        margin-bottom: 10px;
      }
    }
    .category-list {
      justify-content: center;
      .category-item {
        width: 50%;
        flex-direction: column;
        margin: 10px 0;
      }
    }
  }
`;
export const PageArea = styled.div`
  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .ad-items {
      width: 25%;
    }
  }
  .see-all-link {
    color: black;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    .list .ad-items {
      width: 50%;
    }
  }
`;
