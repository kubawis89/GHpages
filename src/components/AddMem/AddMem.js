import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMem } from "../../store/actions/globalActions";
import { AddContainer, Under320px } from "./styledAddMem";

function AddMem() {
  const dispatch = useDispatch();
  const memDataFromState = useSelector((state) => state);

  const [newMemTitle, setNewMemTitle] = useState("");
  const onTitleChange = (e) => {
    setNewMemTitle(e.target.value);
  };

  const [newMemUrlPath, setNewMemUrlPath] = useState("");
  const onUrlPathChange = (e) => {
    setNewMemUrlPath(e.target.value);
  };

  const [newMemImgPath, setNewMemImgPath] = useState();
  const onImgPathChange = (e) => {
    setNewMemImgPath(URL.createObjectURL(e.target.files[0]));
  };

  const [wwwImage, setNewMemSource] = useState(true);
  const setWwwSource = () => {
    setNewMemSource(true);
  };
  const setHddSource = () => {
    setNewMemSource(false);
  };

  const urlRegex = /(https?:\/\/.*\.(?:gif|jpe?g|tiff?|png|webp|bmp))/i;

  const newMemData = {
    id: memDataFromState.memes.length + 1,
    title: newMemTitle,
    upvotes: 0,
    downvotes: 0,
    favorite: false,
    img: newMemUrlPath ? newMemUrlPath : newMemImgPath,
  };

  return (
    <main>
      <Under320px>Go get some bigger screen!</Under320px>
      <AddContainer>
        <h1>Go ahead, share some meme!</h1>
        <p>Just fill in the necessary data: </p>
        <div className="addTitle">
          <label className="addTitle">Title:</label>
          <input
            className="addTitle"
            type="text"
            placeholder="Type new mem title"
            value={newMemTitle}
            onChange={onTitleChange}
          ></input>
        </div>
        <div className="addImg">
          <label>Meme source: </label>
          <button
            className={`${wwwImage ? "buttonActive" : "buttonInactive"}`}
            onClick={setWwwSource}
          >
            From URL
          </button>
          <button
            className={`${wwwImage ? "buttonInactive" : "buttonActive"}`}
            onClick={setHddSource}
          >
            From file
          </button>
        </div>
        <div className="input">
          <input
            className={`${wwwImage ? "pathActive" : "pathInactive"}`}
            type="url"
            placeholder="Type meme url address..."
            value={newMemUrlPath}
            onChange={onUrlPathChange}
          ></input>
          <label className={`${wwwImage ? "pathInactive" : "fileContainer"}`}>
            Click here to upload meme IMG!
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg, image/jpg"
              placeholder="From hard drive"
              onChange={onImgPathChange}
            />
          </label>
        </div>
        <div>
          <button
            className={`${wwwImage ? "addButton" : "pathInactive"}`}
            onClick={() => {
              if (!newMemTitle && !newMemUrlPath) {
                alert("Title and URL address required");
              } else if (newMemTitle && !newMemUrlPath) {
                alert("URL address required");
              } else if (newMemTitle && newMemUrlPath) {
                if (urlRegex.test(newMemUrlPath)) {
                  const addedMem = newMemData;
                  dispatch(addMem(addedMem));
                  setNewMemUrlPath("");
                  setNewMemTitle("");
                  setWwwSource(true);
                  alert("Mem added!");
                } else return alert("Wrong URL address");
              } else alert("Title required");
            }}
          >
            ADD MEM!
          </button>
          <button
            className={`${wwwImage ? "pathInactive" : "addButton"}`}
            onClick={() => {
              if (!newMemTitle && !newMemImgPath) {
                alert("Title and image file required");
              } else if (newMemTitle && !newMemImgPath) {
                alert("Image file required");
              } else if (newMemTitle && newMemImgPath) {
                const addedMem = newMemData;
                dispatch(addMem(addedMem));
                setNewMemTitle("");
                setNewMemImgPath("");
                setWwwSource(true);
                alert("Mem added!");
              } else alert("Title required");
            }}
          >
            ADD MEM!
          </button>
        </div>
      </AddContainer>
    </main>
  );
}

export default AddMem;
