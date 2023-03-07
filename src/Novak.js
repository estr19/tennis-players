import React, { useState } from "react";
import { novakData } from "./novakData";

function Novak() {
  const [newPics, setNewPics] = useState(novakData);

  const expandSelected = (tournament) => {
    const picsArr = [];
    newPics.forEach((pic) => {
      if (pic.tournament === tournament) {
        const changedPics = { ...pic, showSelected: !pic.showSelected };
        picsArr.push(changedPics);
      } else {
        picsArr.push(pic);
      }
    });
    setNewPics(picsArr);
  };

  const collapseSelected = () => {
    setNewPics(novakData);
  };

  return (
    <div>
      <h1>Novak!</h1>
      <div className="parent">
        {newPics.map((item) => {
          const { tournament, photo, gif, score, showSelected } = item;
          return (
            <div
              className={`item ${showSelected ? "selected" : "none"}`}
              key={gif}
              style={{ backgroundImage: "url(" + (showSelected ? gif : photo) + ")" }}
              onMouseEnter={() => expandSelected(tournament)}
              onMouseLeave={() => collapseSelected()}
            >
              <h4
                className={showSelected ? "selected" : "none"}
                onMouseEnter={() => expandSelected(tournament)}
                onMouseLeave={() => collapseSelected()}
              >
                {tournament}
              </h4>
              <p
                className={`location ${showSelected ? "selected" : "none"}`}
                onMouseEnter={() => expandSelected(tournament)}
                onMouseLeave={() => collapseSelected()}
              >
                {score}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Novak;