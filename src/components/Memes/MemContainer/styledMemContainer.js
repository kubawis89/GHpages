import styled from "styled-components";

export const MemSection = styled.div`
  background-color: #222930;
  padding: 0px 20px 10px 20px;
  text-align: center;
  margin-top: 20px;
  border-radius: 5px;
  h2 {
    font-size: 30px;
    font-weight: 400;
    color: #39a5f1;
    padding: 5px;
    margin-bottom: 5px;
  }
  .navLink {
    text-decoration: none;
    color: white;
  }
  @media only screen and (max-width: 319px) {
    display: none;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding: 0px 10px 10px 10px;
    margin-top: 10px;
    max-width: 320px;
    .memImg {
      width: 300px;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 680px) {
    padding: 0px 10px 10px 10px;
    margin-top: 10px;
    max-width: 480px;
    .memImg {
      width: 460px;
    }
  }
`;

export const Assesment = styled.div`
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    max-width: 300px;
  }
  @media only screen and (min-width: 481px) and (max-width: 680px) {
    max-width: 460px;
  }
`;

export const Vote = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  width: 150px;
`;

export const Thumbs = styled.section`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  margin: 0 7px 0 0;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

export const VoteResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 240px;
  .hot {
    background-color: green;
    font-size: 16px;
    border-radius: 20px 0px 0px 20px;
    font-weight: 700;
    &:hover {
      font-size: 17px;
    }
  }
  .regular {
    background-color: #39a5f1;
    font-size: 16px;
    font-weight: 700;
    &:hover {
      font-size: 17px;
    }
  }
  .poor {
    background-color: red;
    font-size: 16px;
    border-radius: 0px 20px 20px 0px;
    font-weight: 700;
    &:hover {
      font-size: 17px;
    }
  }
  .span1 {
    border-radius: 20px 0px 0px 20px;
    &:hover {
      font-size: 16px;
    }
  }
  .span3 {
    border-radius: 0px 20px 20px 0px;
    &:hover {
      font-size: 16px;
    }
  }
  span {
    padding: 2px;
    width: 80px;
    height: 30px;
    border: 1px solid black;
    background-color: #2f3336;
    font-size: 14px;
    &:hover {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .span1 {
      display: none;
    }
    .span2 {
      display: none;
    }
    .span3 {
      display: none;
    }
    .hot {
      font-size: 15px;
      width: 75px;
      border-radius: 20px;
    }
    .regular {
      font-size: 15px;
      width: 75px;
      border-radius: 20px;
    }
    .poor {
      font-size: 15px;
      width: 75px;
      border-radius: 20px;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 680px) {
    .span1 {
      display: none;
    }
    .span2 {
      display: none;
    }
    .span3 {
      display: none;
    }
    .hot {
      font-size: 16px;
      border-radius: 20px;
      width: 80px;
    }
    .regular {
      font-size: 16px;
      border-radius: 20px;
      width: 80px;
    }
    .poor {
      font-size: 16px;
      border-radius: 20px;
      width: 80px;
    }
  }
`;
export const Favorite = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 150px;
`;
