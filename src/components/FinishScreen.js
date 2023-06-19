function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100);
  let emoji;

  if (percentage === 100) emoji = '🏆';
  if (percentage < 100) emoji = '🎉';
  if (percentage < 80) emoji = '👍';
  if (percentage < 50) emoji = '😅';
  if (percentage < 30) emoji = '⛈️';
  if (percentage === 0) emoji = '🤮';

  return (
    <>
      <p className="result">
        You scored {points} out of {maxPossiblePoints} ({percentage}%){' '}
        <span>{emoji}</span>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
