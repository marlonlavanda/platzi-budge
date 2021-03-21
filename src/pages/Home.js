import React from 'react'
import astronautas from '../images/astronauts.svg'
import logo from '../images/platziconf-logo.svg'

import  '../components/styles/Home.css'

class Home extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="Home__background">
          <div className="row Home__container" >
            <div className="col-6">
            <div className="mx-auto ">
                <img src={logo} alt="astronautas"/>
              </div>
              {/* <h3></h3> */}
            </div>
            <div className="col-6">
              <div className="mx-auto ">
                <img src={astronautas} alt="astronautas"/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
