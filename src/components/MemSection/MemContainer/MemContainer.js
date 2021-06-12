import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addUpvote,
  addDownvote,
  favoriteMem,
} from "../../../store/actions/globalActions";

function MemContainer({ sendedData }) {
  const dispatch = useDispatch();

  return (
    <div key={sendedData.id} className="memSection">
      <h2>{sendedData.title}</h2>
      <img
        className="memImg"
        src={sendedData.img}
        width="600"
        alt={sendedData.title}
      ></img>
      <div className="assesment">
        <div className="vote">
          <section className="thumbs">
            <button
              className="button"
              style={{ margin: "0 7px 0 0" }}
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
            </button>
            {sendedData.upvotes}
          </section>
          <section className="thumbs">
            <button
              className="button"
              style={{ margin: "0 7px 0 0" }}
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
            </button>
            {sendedData.downvotes}
          </section>
        </div>
        <div className="voteResult">
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
        </div>
        <div className="favorite">
          <button
            className="button"
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemContainer;
