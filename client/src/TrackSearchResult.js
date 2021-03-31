import React from "react";
import "./css/Dashboard.css";

export default function TrackSearchResult({ track, chooseTrack }) {
  const handlePlay = () => {
    chooseTrack(track);
  };
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div className="title">{track.title}</div>
        <div className="subtitle">{track.artist}</div>
      </div>
    </div>
  );
}
