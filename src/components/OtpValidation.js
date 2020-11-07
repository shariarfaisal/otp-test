import React,{ useContext } from 'react'
import { FormContext } from './Form'
import Input from './Input'


function OtpValidation(props) {
  const { otp, setOtp, loading } = useContext(FormContext)
  return(
    <div className="pop-up">
      <Input
        label="Validation Code"
        id="otp"
        type="text"
        value={otp}
        setValue={setOtp}
        plc="Code"
      />
      <div className="text-center">
        <button disabled={loading || !otp} type="submit" className="btn btn-sm btn-a px-4 round-20" name="button">
          <span>Next</span>
          {loading && <i className="bx bx-loader bx-spin ml-2"></i>}
        </button>
      </div>
    </div>
  )
}
export default OtpValidation
