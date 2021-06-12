import React from "react";
import MemContainer from "../MemContainer/MemContainer";
import { useSelector } from "react-redux";

function HotMemes() {
  const memDataFromState = useSelector((state) => state);

  const memList = memDataFromState.memes
    .filter((mem) => mem.upvotes - mem.downvotes > 4)
    .map((filteredMem) => <MemContainer sendedData={filteredMem} />);

  return (
    <main>
      <div className="under320px">Go get some bigger screen!</div>
      {memList.length ? (
        <div>{memList}</div>
      ) : (
        <div>Sorry, there are no good enough memes for you on this site...</div>
      )}
    </main>
  );
}

export default HotMemes;
