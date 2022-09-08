import React from "react";

export default function SeasonsTVShow({
  currentSeason,
  totalSeasons,
  hanldeCurrentSeason,
}) {
  console.log(currentSeason);
  return (
    <div className="number-of-seasons__list">
      {Array.from(Array(totalSeasons).keys()).map((item) => {
        return (
          <p
            className={`number-of-seasons__item ${
              item + 1 === currentSeason
                ? "number-of-seasons__item--active"
                : ""
            }`}
            key={item}
            onClick={() => {
              hanldeCurrentSeason(item + 1);
            }}
          >
            {item + 1}
          </p>
        );
      })}
    </div>
  );
}
