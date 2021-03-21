import React from 'react'
import notFound from '../images/notFound.svg'

import  '../components/styles/NotFound.css'

function NotFound() {
  return (
    <React.Fragment>
      <div className="NotFound__background">
        <div className="NotFound__img mx-auto">
          <img src={notFound} alt="404"/>      
        </div>
      </div>
    </React.Fragment>
  )
}

export default NotFound