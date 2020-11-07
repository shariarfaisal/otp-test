import React,{ createContext, useState } from 'react'
import PhoneValidation from './PhoneValidation'
import OtpValidation from './OtpValidation'
import PasswordValidation from './PasswordValidation'
import ErrorMsg from './ErrorMsg'
import SuccessMsg from './SuccessMsg'
import axios from 'axios'

export const FormContext = createContext()

function Form(props) {
  const [phone,setPhone] = useState('')
  const [loading,setLoading] = useState(false)
  const [phoneStatus,setPhoneStatus] = useState(false)
  const [otp,setOtp] = useState('')
  const [otpStatus,setOtpStatus] = useState(false)
  const [password,setPassword] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const onSubmitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    try{
      if(phone && !phoneStatus){
          const res = await axios.post('/validate_phone/',{ phone })
          if(!res.data.status){
            setLoading(false)
            setError(res.data.detail)
          }else{
            setLoading(false)
            setError('')
            setPhoneStatus(true)
          }
      }else if(phone && phoneStatus && !otpStatus){
        const res = await axios.post('/validate_otp/',{ phone, otp })
        if(!res.data.status){
          setLoading(false)
          setError(res.data.detail)
        }else{
          setLoading(false)
          setError('')
          setOtpStatus(true)
        }
      }else if(phoneStatus && otpStatus){
        const res = await axios.post('/register/',{ phone, password })
        if(!res.data.status){
          setLoading(false)
          setError(res.data.detail)
        }else{
          setLoading(false)
          setError('')
          console.log(res.data);
          setSuccess(res.data.detail)
        }
      }
    }catch(err){
      setLoading(false)
      setError('Something wrong happen in the server!')
    }
  }

  return(
    <FormContext.Provider value={{
      phone, setPhone, otp, setOtp, password, setPassword, error, success, loading
    }}>
      <form onSubmit={onSubmitHandler} className="p-4">
        {error && <ErrorMsg>{error}</ErrorMsg>}
        {success && <SuccessMsg>{success}</SuccessMsg>}
        {!phoneStatus && <PhoneValidation />}
        {phoneStatus && !otpStatus && <OtpValidation />}
        {phoneStatus && otpStatus && !success && <PasswordValidation />}
      </form>
    </FormContext.Provider>
  )
}
export default Form
