import React from 'react'

class BadgeForm extends React.Component {
  state = {};

  handleClick = (e) => {
    console.log("Buttom was clicked");
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            value={this.props.formValues.firstName}
            name="name"/>
          </div>
          <div className="form-group">
            <label>Surname</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            value={this.props.formValues.lastName}
            name="surname"/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="email" 
            value={this.props.formValues.email}
            name="email"/>
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            value={this.props.formValues.jobTitle}
            name="jobTitle"/>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            value={this.props.formValues.twitter}
            name="twitter"/>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm