import React from 'react'
import errorImg from '../images/error500.svg'
import "./styles/PageError.css"

function PageError (props) {
  return <div className="PageError">
    <img className="img" src={errorImg} alt=""/>
    {props.error.message}
  </div>
  
}

export default PageError