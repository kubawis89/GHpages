import React from "react";
import { useSelector } from "react-redux";

import MemContainer from "./MemContainer/MemContainer";

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

export const TextDiv = styled.div`
  @media only screen and (max-width: 319px) {
    display: none;
  }
`;

function Memes({ chosenPath }) {
  const memDataFromState = useSelector((state) => state);
  let divText;
  let filterCondition;

  switch (chosenPath) {
    case "home": {
      filterCondition = (mem) => mem.id;
      divText = "Our mem base is empty! Please, add some funny image!";
      break;
    }
    case "hot": {
      filterCondition = (mem) => mem.upvotes - mem.downvotes > 4;
      divText = "Sorry, there are no good enough memes for you on this site...";
      break;
    }
    case "regular": {
      filterCondition = (mem) =>
        mem.upvotes - mem.downvotes < 5 && mem.upvotes - mem.downvotes > -1;
      divText =
        "It looks like there are no regular memes on this page. Check out hot or poor ones!";
      break;
    }
    case "poor": {
      filterCondition = (mem) => mem.upvotes - mem.downvotes < 0;
      divText = "It seems you like all the memes I prepared for this project!";
      break;
    }
    case "favorite": {
      filterCondition = (mem) => mem.favorite;
      divText =
        "Add some memes to your favorites by clicking on the heart-shaped button!";
      break;
    }
    default: {
      filterCondition = (mem) => mem.id;
      divText = "Our mem base is empty! Please, add some funny image!";
    }
  }

  const memList = memDataFromState.memes
    .filter(filterCondition)
    .map((filteredMem) => (
      <MemContainer key={filteredMem.id} sendedData={filteredMem} />
    ));

  return (
    <main>
      <Under320px>Go get some bigger screen!</Under320px>
      {memList.length ? <div>{memList}</div> : <TextDiv>{divText}</TextDiv>}
    </main>
  );
}

export default Memes;
