import React from 'react'
import './styles/BadgesList.css'

class BadgesList extends React.Component{
  render(){
    return(
      <ul className="list-unstyled BadgesList">
                {this.props.badges.map((badge) => {
                  return(
                    <li key={badge.id} className="BadgesListItem">
                      <img src={badge.avatarUrl} alt="" className="BadgesListItem__avatar"/>
                      <div>
                        <div><strong>{badge.name} {badge.surname}</strong></div>
                        <div>
                          <span className="Twitter__logo"></span> @{badge.twitter}
                        </div>
                        <div>{badge.jobTitle}</div>
                      </div>
                    </li>
                  )
                })}
        </ul>
    )
  }
}

export default BadgesList