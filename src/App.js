import React from 'react'
import Form from './components/Form'

function App(props) {
  return(
    <div className="wrapper row mx-0 justify-content-center align-items-center">
      <div className="content col-sm-8 col-md-6 col-lg-4 p-0 shadow">
        <h3 className="text-center title mb-0">Signup</h3>
        <Form />
      </div>
    </div>
  )
}
export default App
