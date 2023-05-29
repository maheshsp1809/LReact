import React from 'react'

const ScoreBoard = ({scores}) => {
    const sortedScores = scores.sort((a, b) => b.score - a.score);
  return (
    <div>
      <h2>Score Board</h2>
      <ul>
        {sortedScores.map((score, index) => (
          <li key={index}>
            {score.name} - {score.score}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ScoreBoard