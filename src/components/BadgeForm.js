import React from 'react'

class BadgeForm extends React.Component {
  state = {};

  // handleChange = (e) => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value});
  //   this.setState({
  //     // [e.target.name] hace que la info que se introduce en el imput se guarde en sus respectivos estados
  //     [e.target.name]: e.target.value,
  //   })
  //   }
  handleClick = (e) => {
    console.log("Buttom was clicked");
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            value={this.props.formValues.name}
            name="name"/>
          </div>
          <div className="form-group">
            <label>Surname</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            value={this.props.formValues.surname}
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