// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
  } = details
  console.log(details)

  return (
    <div className="latest-match-container">
      <div className="left-info">
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="opp-team-logo"
      />
      <div className="right-info">
        <p>FirstInnings</p>
        <p>{firstInnings}</p>
        <p>SecondInnings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
