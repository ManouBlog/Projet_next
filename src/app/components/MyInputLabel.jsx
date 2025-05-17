import React from 'react'

export default function MyInputLabel({labelName,typeInput,onHandleValue,value,placeholder}) {
  return (
    <div>
    <label htmlFor={labelName} className='font-semibold'>{labelName}</label>
    <input 
    type={typeInput} 
    onChange={onHandleValue}
    value={value}
    className="input input-bordered w-full my-3" 
    placeholder={placeholder} />
    </div>
  )
}
