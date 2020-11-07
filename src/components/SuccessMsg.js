import React from 'react'

function SuccessMsg({ children }) {
  return(
    <div className="alert alert-success" role="alert">
      { children }
    </div>
  )
}
export default SuccessMsg
