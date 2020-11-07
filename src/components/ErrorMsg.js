import React from 'react'

function ErrorMsg({ children }) {
  return(
    <div className="alert alert-danger" role="alert">
      { children }
    </div>
  )
}
export default ErrorMsg
