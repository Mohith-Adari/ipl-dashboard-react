// Write your code here

import './index.css'

const MatchCard = props => {
  const {details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = details

  const isWon = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card-list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={isWon}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
