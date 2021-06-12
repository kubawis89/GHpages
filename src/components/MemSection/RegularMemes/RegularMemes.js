import React from "react";
import MemContainer from "../MemContainer/MemContainer";
import { useSelector } from "react-redux";

function RegularMemes() {
  const memDataFromState = useSelector((state) => state);

  const memList = memDataFromState.memes
    .filter(
      (mem) =>
        mem.upvotes - mem.downvotes < 5 && mem.upvotes - mem.downvotes > -1
    )
    .map((filteredMem) => <MemContainer sendedData={filteredMem} />);

  return (
    <main>
      <div className="under320px">Go get some bigger screen!</div>
      {memList.length ? (
        <div>{memList}</div>
      ) : (
        <div>
          It looks like there are no regular memes on this page. Check out hot
          or poor ones!
        </div>
      )}
    </main>
  );
}

export default RegularMemes;
