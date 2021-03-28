import React from 'react';
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'
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
        <Gravatar 
        className="badge_avatar" 
        email={this.props.email} alt="Avatar"/>
        <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
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