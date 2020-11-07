import React,{ useContext } from 'react'
import { FormContext } from './Form'
import Input from './Input'


function PasswordValidation(props) {
  const { password, setPassword, loading } = useContext(FormContext)
  return(
    <div className="pop-up">
      <Input
        label="Password"
        id="password"
        type="password"
        value={password}
        setValue={setPassword}
        plc="Password"
      />
      <div className="text-center">
        <button disabled={loading || !password} type="submit" className="btn btn-sm btn-a px-4 round-20">
          <span>Submit</span>
          {loading && <i className="bx bx-loader bx-spin ml-2"></i>}
        </button>
      </div>
    </div>
  )
}
export default PasswordValidation
