// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: [], isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    console.log(`Response status: ${response.status}`)
    const data = await response.json()
    console.log(data)
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(matches => ({
        umpires: matches.umpires,
        result: matches.result,
        manOfTheMatch: matches.man_of_the_match,
        id: matches.id,
        date: matches.date,
        venue: matches.venue,
        competingTeam: matches.competing_team,
        competingTeamLogo: matches.competing_team_logo,
        firstInnings: matches.first_innings,
        secondInnings: matches.second_innings,
        matchStatus: matches.match_status,
      })),
    }

    console.log(formattedData)

    this.setState({matchDetails: formattedData, isLoading: false})
  }

  renderTeamMatch() {
    const {matchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" />
        <p className="latest">Latest Matches</p>
        <LatestMatch details={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(each => (
            <MatchCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatch()
        )}
      </>
    )
  }
}

export default TeamMatches
