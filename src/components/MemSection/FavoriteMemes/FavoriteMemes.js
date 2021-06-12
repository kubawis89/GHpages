import React from "react";
import MemContainer from "../MemContainer/MemContainer";
import { useSelector } from "react-redux";

function FavoriteMemes() {
  const memDataFromState = useSelector((state) => state);

  const memList = memDataFromState.memes
    .filter((mem) => mem.favorite)
    .map((filteredMem) => <MemContainer sendedData={filteredMem} />);

  return (
    <main>
      <div className="under320px">Go get some bigger screen!</div>
      {memList.length ? (
        <div>{memList}</div>
      ) : (
        <div>
          Add some memes to your favorites by clicking on the heart-shaped
          button!
        </div>
      )}
    </main>
  );
}

export default FavoriteMemes;
