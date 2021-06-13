import styled from "styled-components";

export const ErrorDiv = styled.div`
  color: #fff;
  margin: 30px;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 20px;
    padding: 20px;
    text-decoration: none;
    a {
      text-decoration: none;
      color: #39a5f1;
      &:hover {
        color: #f48024;
      }
    }
  }

  @media only screen and (max-width: 319px) {
    margin: 30px 0 30px 0;
    h1 {
      font-size: 35px;
    }
    img {
      display: none;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin: 30px 0 30px 0;
    h1 {
      font-size: 45px;
    }
    img {
      width: 320px;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 680px) {
    margin: 30px 0 30px 0;
    h1 {
      font-size: 45px;
    }
    img {
      width: 480px;
    }
  }
`;
