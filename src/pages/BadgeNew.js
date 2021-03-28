import React from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import header from '../images/platziconf-logo.svg'
import  '../components/styles/BadgeNew.css'
import api from '../api'
import md5 from 'md5'
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component {
  state = { 
    loading: false,
    error: null,
    form:{
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    twitter: "",
  } 
}

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, [e.target.name]: e.target.value,
      }
    })
  }
  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null})
    
    try {
      this.state.form.avatarUrl=`https://gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`;
      await api.badges.create(this.state.form)
      this.props.history.push('/badges')
      this.setState({loading: false})
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }
  render(){
    if(this.state.loading){
      return <PageLoading/>
    }
    return(
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img 
          className="BadgeNew__hero-image 
          img-fluid" 
          src={header} 
          alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <Badge 
            firstName={this.state.form.firstName || 'FIRST_NAME'} 
            lastName={this.state.form.lastName || 'SURNAME'} 
            avatarUrl="http://en.gravatar.com/avatar/c2e89682cdbe199e743d970ef00b5b78?id=identicon"
            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} 
            twitter={this.state.form.twitter || 'twitter'} 
            email={this.state.form.email || 'EMAIL'} 
            ></Badge>
            </div>
            <div className="col-6">
            <h1>New Attendant</h1>
              <BadgeForm
                onSubmit={this.handleSubmit} 
                onChange={this.handleChange}
               formValues={this.state.form}></BadgeForm>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;
