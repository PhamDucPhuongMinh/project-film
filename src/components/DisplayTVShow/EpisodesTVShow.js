import React from "react";

export default function EpisodesTVShow({
  currentEpisode,
  totalEpisodes,
  hanldeCurrentEpisode,
}) {
  return (
    <div className="number-of-episodes__list">
      {Array.from(Array(totalEpisodes).keys()).map((item) => {
        return (
          <p
            className={`number-of-episodes__item ${
              item + 1 === currentEpisode
                ? "number-of-episodes__item--active"
                : ""
            }`}
            key={item}
            onClick={() => {
              hanldeCurrentEpisode(item + 1);
            }}
          >
            {item + 1}
          </p>
        );
      })}
    </div>
  );
}
