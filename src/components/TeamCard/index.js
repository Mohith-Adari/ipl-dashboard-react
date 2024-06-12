// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {id, teamImageUrl, name} = details

  return (
    <li>
      <Link to={`/ipl/${id}`}>
        <div className="team-card-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <h1 className="team-name">{name}</h1>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
