import React from 'react'

export const TextInput = ({fieldHandler,isFormValidOnBlur,errorFields,label,id,name,type}) => {
  return (
    <div className="input-section">
    <label htmlFor={id}>{label}: </label>
    <input type={type} id={id} name={name} onChange={fieldHandler} onBlur={isFormValidOnBlur} />

    {errorFields[name] && <p className="danger">{label} is required</p>}
</div>
  )
}

