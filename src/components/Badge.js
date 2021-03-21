import React from 'react';
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'


class Badge extends React.Component {
  render(){
    // const name = "Marlon"
    // const surname = "Lavanda"
    return( 
    <div className="badge">
      <div className="badge_header">
        <img src={confLogo} alt=""/>
      </div>

      <div className="badge_section-name">
        <img className="badge_avatar" src={this.props.avatarUrl} alt=""/>
        <h1>{this.props.name} <br/> {this.props.surname}</h1>
      </div>

      <div className="badge_section-info">
        <h4>{this.props.jobTitle}</h4>
        <div>@{this.props.twitter}</div>
      </div>

      <div>
        <div className="badge_footer">#platziconf</div>
      </div>
    </div>
    )
  }
}

export default Badge;