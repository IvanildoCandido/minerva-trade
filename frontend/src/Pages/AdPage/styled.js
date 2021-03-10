import styled from 'styled-components';

export const Fake = styled.div`
  background-color: #ddd;
  height: ${(props) => props.height || 20}px;
`;

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;
  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0, 0, 4 #999;
    margin-bottom: 20px;
  }
  .box-padding {
    padding: 10px;
  }
  .left-side {
    flex: 1;
    margin-right: 20px;
    .ad-image {
    }
    .ad-info {
      padding: 10px;
      .ad-name {
        margin-bottom: 20px;
      }
      .ad-description {
      }
    }
  }
  .right-side {
    width: 250px;
  }
`;
