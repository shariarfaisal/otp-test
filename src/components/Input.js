import React from 'react'

const Input = ({ label, type, id, value, setValue, plc}) => {
  return (
    <div className="form-group">
      <label forhtml={id}>{label}</label>
      <input
        type={type}
        id={id}
        onChange={e => setValue(e.target.value)}
        className="form-control form-control-sm"
        placeholder={plc}
      />
    </div>
  )
}
export default Input
