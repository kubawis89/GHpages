import styled from "styled-components";

export const Under320px = styled.div`
  display: none;
  background-color: #222930;
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 100px 0 100px 0;
  width: 100%;
  @media only screen and (max-width: 319px) {
    display: inline-block;
    min-height: calc(100vh - 545px);
  }
`;
export const AddContainer = styled.div`
  background-color: #222930;
  padding: 50px 20px;
  text-align: center;
  margin: 30px 0 0 0;
  border-radius: 5px;
  width: 600px;
  h1 {
    font-size: 30px;
    font-weight: 400;
    color: #39a5f1;
    padding: 5px;
    margin-bottom: 5px;
  }
  .addTitle {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px 0 0 0;
    font-size: 30px;
  }
  .addImg {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 30px 0 0 0;
    font-size: 16px;
    label {
      text-align: center;
    }
  }
  .pathInactive {
    display: none;
  }
  .pathActive {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    font-size: 18px;
    width: 320px;
    height: 25px;
  }
  .input {
    display: flex;
    justify-content: center;
  }
  .addButton {
    width: 300px;
    background-color: #36b03c;
    color: white;
    font-size: 16px;
    padding: 5px 5px;
    margin-top: 50px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #25a02b;
      transform: scale(1.02);
    }
  }
  .fileContainer {
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    background: lightgray;
    width: 320px;
    height: 25px;
    color: black;
    margin: 10px 0;
    &:hover {
      cursor: pointer;
      background: darkgray;
    }
  }
  .fileContainer [type="file"] {
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
  .buttonActive {
    background-color: #fcdc00;
    font-size: 16px;
    margin: 10px 0;
    width: 175px;
    padding: 5px 0;
    border-radius: 5px;
    cursor: default;
    text-transform: uppercase;
    font-weight: 700;
  }
  .buttonInactive {
    background-color: darkgray;
    font-size: 16px;
    margin: 10px 0;
    width: 175px;
    padding: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #f48024;
      transform: scale(1.02);
    }
  }

  @media only screen and (max-width: 319px) {
    display: none;
  }

  @media only screen and (min-width: 481px) and (max-width: 680px) {
    padding: 50px 10px;
    margin: 30px 0 0 0;
    border-radius: 5px;
    width: 470px;
    h1 {
      font-size: 25px;
      padding: 4px;
      margin-bottom: 4px;
    }
    .addTitle {
      margin: 10px 0 0 0;
      font-size: 25px;
    }
    .addImg {
      margin: 20px 0 0 0;
    }
    .pathActive {
      font-size: 16px;
      width: 300px;
      height: 20px;
    }
    .addButton {
      width: 250px;
      margin-top: 30px;
    }
    .fileContainer {
      width: 280px;
      height: 20px;
      color: black;
    }
    .buttonActive {
      font-size: 14px;
      width: 150px;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 700;
    }
    .buttonInactive {
      font-size: 14px;
      width: 150px;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding: 50px 10px;
    width: 320px;
    h1 {
      font-size: 20px;
      padding: 3px;
      margin-bottom: 3px;
    }
    .addTitle {
      margin: 10px 0 0 0;
      font-size: 20px;
      input {
        width: 200px;
      }
    }
    .addImg {
      margin: 20px 0 0 0;
      font-size: 14px;
    }
    .pathActive {
      font-size: 16px;
      width: 250px;
      height: 20px;
    }
    .addButton {
      width: 200px;
      margin-top: 30px;
    }
    .fileContainer {
      width: 280px;
      height: 20px;
      color: black;
    }
    .buttonActive {
      font-size: 12px;
      width: 90px;
      text-transform: uppercase;
      font-weight: 700;
    }
    .buttonInactive {
      font-size: 12px;
      width: 90px;
    }
  }
`;
