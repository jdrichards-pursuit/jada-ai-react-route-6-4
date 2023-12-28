import React from "react";

const Try = () => {
  return (
    <div className="card p-lg-4 p-md-2 mb-4 mb-lg-5">
      <div className="audio-player card-body p-2 p-sm-4">
        {/* Audio tag with the link to the audio file */}
        <audio src="assets/audio/sample.wav" preload="auto" />
        {/* Custom player markup */}
        <button
          type="button"
          className="ap-play-button btn btn-icon] btn-primary shadow-primary"
          aria-label="Play/pause"
        />
        <span className="ap-current-time flex-shr fw-medium mx-3 mx-lg-4">
          0:00
        </span>
        <input
          type="range"
          className="ap-seek-slider"
          max={100}
          defaultValue={0}
        />
        <span className="ap-duration flex-shr fw-medium mx-3 mx-lg-4">
          0:00
        </span>
        <div className="dropup">
          <button
            type="button"
            className="ap-volume-button btn btn-icon btn-secondary"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Volume"
          >
            <i className="bx bx-volume-full" />
          </button>
          <div className="dropdown-menu dropdown-menu-dark my-1">
            <input
              type="range"
              className="ap-volume-slider"
              max={100}
              defaultValue={100}
            />
          </div>
        </div>
        <a
          href="assets/audio/sample.wav"
          download="audio-sample"
          className="btn btn-icon btn-secondary ms-2"
          aria-label="Download"
        >
          <i className="bx bx-download" />
        </a>
      </div>
    </div>
  );
};

export default Try;
