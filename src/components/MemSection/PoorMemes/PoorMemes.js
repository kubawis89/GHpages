import React from "react";
import MemContainer from "../MemContainer/MemContainer";
import { useSelector } from "react-redux";

function PoorMemes() {
  const memDataFromState = useSelector((state) => state);

  const memList = memDataFromState.memes
    .filter((mem) => mem.upvotes - mem.downvotes < 0)
    .map((filteredMem) => <MemContainer sendedData={filteredMem} />);

  return (
    <main>
      <div className="under320px">Go get some bigger screen!</div>
      {memList.length ? (
        <div>{memList}</div>
      ) : (
        <div>It seems you like all the memes I prepared for this project!</div>
      )}
    </main>
  );
}

export default PoorMemes;
