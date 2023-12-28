const TalkOutput = ({ data }) => {
  const { reply, sound, input } = data;

  function handlePlay() {
    document.getElementById("brain-audio").play();
  }

  return (
    <div>
      <h2 className="fs-3">{input}</h2>
      <p className="fs-5">{reply}</p>
      <audio id="brain-audio" autoPlay src={sound}></audio>
      <button
        onClick={handlePlay}
        className="btn btn-lg btn-secondary shadow-brain me-3 me-sm-4"
      >
        Play Again
      </button>
    </div>
  );
};

export default TalkOutput;
