import React from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import header from '../images/badge-header.svg'
import  '../components/styles/BadgeNew.css'

class BadgeNew extends React.Component {
  state = { form:{
    name: "",
    surname: "",
    jobTitle: "",
    email: "",
    twitter: "",

  } }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, [e.target.name]: e.target.value,
      }
    })
  }
  render(){
    return(
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <Badge 
            name={this.state.form.name} 
            surname={this.state.form.surname} 
            avatarUrl="https://avatars.githubusercontent.com/u/65986500?s=460&u=26f692c9dd72a99900f8c6af16fa16383eb8e29a&v=4"
            jobTitle={this.state.form.jobTitle} 
            twitter={this.state.form.twitter} 
            email={this.state.form.email} 
            ></Badge>
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}></BadgeForm>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;
