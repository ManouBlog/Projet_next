import React from 'react'

export default function Input({label,placeholder,type,isRequired,onChange,valueInput}) {
  return (
    <>
      <label className="label">{label}
        {isRequired && <span style={{color:'red'}}>*</span> }
         
         </label>
          <input 
          value={valueInput}
          onChange={(e)=>onChange(e.target.value)}
          required={isRequired}
          type={type}
          className="input border-gray-600 rounded py-4 border-2 mb-8 w-full" 
          placeholder={placeholder} />
    </>
  )
}
