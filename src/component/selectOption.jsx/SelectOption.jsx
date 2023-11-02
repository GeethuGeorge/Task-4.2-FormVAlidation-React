import React from 'react'

export const SelectOption = ({fieldHandler, isFormValidOnBlur, errorFields, name, id}) => {
  return (
    <div className="input-section dropdown-section">
    <label htmlFor="">Country: </label>
    <select name={name} id={id} onChange={fieldHandler} onBlur={isFormValidOnBlur}>
        <option value="">Select</option>
        <option value="india">India</option>
        <option value="uae">UAE</option>
        <option value="qatar">Qatar</option>
    </select>
    {errorFields[name] && <p className="danger">Country is required</p>}
</div>
  )
}
