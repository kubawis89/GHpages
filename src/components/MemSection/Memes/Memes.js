import React from "react";
import MemContainer from "../MemContainer/MemContainer";
import { useSelector } from "react-redux";
import "./Memes.scss";

function Memes() {
  const memDataFromState = useSelector((state) => state);

  const memList = memDataFromState.memes
    .filter((mem) => mem.id)
    .map((filteredMem) => <MemContainer sendedData={filteredMem} />);

  return (
    <main>
      <div className="under320px">Go get some bigger screen!</div>
      {memList.length ? (
        <div>{memList}</div>
      ) : (
        <div>Our mem base is empty! Please, add some funny image!</div>
      )}
    </main>
  );
}

export default Memes;
