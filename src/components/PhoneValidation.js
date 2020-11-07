import React,{ useContext } from 'react'
import { FormContext } from './Form'
import Input from './Input'


function PhoneValidation(props) {
  const { phone, setPhone, loading } = useContext(FormContext)
  return(
    <div className="pop-up">
      <Input
        label="Type your phone number"
        id="phone"
        type="text"
        value={phone}
        setValue={setPhone}
        plc="Phone"
      />
      <div className="text-center">
        <button disabled={loading || !phone} type="submit" className="btn btn-sm btn-a px-4 round-20" name="button">
          <span>Next</span>
          {loading && <i className="bx bx-loader bx-spin ml-2"></i>}
        </button>
      </div>
    </div>
  )
}
export default PhoneValidation
