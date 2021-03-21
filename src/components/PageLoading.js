import React from 'react'
import Loader from './Loader'

import "./styles/PageLoading.css"
function PageLoading () {
  return(
    <div className="PageLoading">
      <Loader></Loader>
    </div>
  )
}

export default PageLoading