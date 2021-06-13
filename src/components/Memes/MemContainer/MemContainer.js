import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addUpvote,
  addDownvote,
  favoriteMem,
} from "../../../store/actions/globalActions";

import {
  MemSection,
  Assesment,
  Vote,
  Thumbs,
  Button,
  VoteResult,
  Favorite,
} from "./styledMemContainer.js";

function MemContainer({ sendedData }) {
  const dispatch = useDispatch();

  return (
    <MemSection key={sendedData.id}>
      <h2>{sendedData.title}</h2>
      <img
        className="memImg"
        src={sendedData.img}
        width="600"
        alt={sendedData.title}
      ></img>
      <Assesment>
        <Vote>
          <Thumbs>
            <Button
              onClick={() => {
                const thumbsUpId = sendedData.id;
                dispatch(addUpvote(thumbsUpId));
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/up.png"}
                width="30"
                alt="Upvotes"
              />
            </Button>
            {sendedData.upvotes}
          </Thumbs>
          <Thumbs>
            <Button
              onClick={() => {
                const thumbsDownId = sendedData.id;
                dispatch(addDownvote(thumbsDownId));
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/down.png"}
                width="30"
                alt="Downvotes"
              />
            </Button>
            {sendedData.downvotes}
          </Thumbs>
        </Vote>
        <VoteResult>
          <span
            className={`${
              sendedData.upvotes - sendedData.downvotes > 4 ? "hot" : "span1"
            }`}
          >
            <NavLink to="/hot" className="navLink">
              Hot
            </NavLink>
          </span>
          <span
            className={`${
              sendedData.upvotes - sendedData.downvotes < 5 &&
              sendedData.upvotes - sendedData.downvotes > -1
                ? "regular"
                : "span2"
            }`}
          >
            <NavLink to="/regular" className="navLink">
              Regular
            </NavLink>
          </span>
          <span
            className={`${
              sendedData.upvotes - sendedData.downvotes < 0 ? "poor" : "span3"
            }`}
          >
            <NavLink to="/poor" className="navLink">
              Poor
            </NavLink>
          </span>
        </VoteResult>
        <Favorite>
          <Button
            style={{ margin: "0" }}
            onClick={() => {
              const favoriteMemId = sendedData.id;
              dispatch(favoriteMem(favoriteMemId));
              console.log(window.pageYOffset);
            }}
          >
            <img
              src={`${
                sendedData.favorite
                  ? process.env.PUBLIC_URL + "/images/addedToFavorite.png"
                  : process.env.PUBLIC_URL + "/images/addToFavorite.png"
              }`}
              width="30"
              alt={`${
                sendedData.favorite ? "Remove from favorite" : "Add to favorite"
              }`}
            />
          </Button>
        </Favorite>
      </Assesment>
    </MemSection>
  );
}

export default MemContainer;
