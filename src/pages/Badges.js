import React from 'react'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import {Link} from 'react-router-dom'
import api from '../api'
import confLogo from "../images/badge-header.svg"
import '../components/styles/Badges.css'
class Badges extends React.Component{
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})
    try {
      const data = await api.badges.list()
      this.setState({loading: false, data: data})
    } catch(error){
      this.setState({loading: false, error: error})
    }
  }

  render(){
    // console.log('2/4. Render');
    if(this.state.loading === true){
      return <PageLoading/>
    }
    if(this.state.error){
      return <PageError error={this.state.error}></PageError>
    }
    return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary"> New Badge</Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges