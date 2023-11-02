import React from 'react'

export const RadioInput = ({className,type,id,name,fieldHandler,isFormValidOnBlur,errorFields}) => {
  return (
   
    <div className="input-section dropdown-section radio-groups">
    <label htmlFor="gender">Gender : </label>
    <div>
        <label htmlFor="" className={className}>
            Male
            <input
                className="radio-button-gender"
                type={type}
                id={id}
                name={name}
                value="male"
                onChange={fieldHandler}
                onBlur={isFormValidOnBlur}
            />
        </label>
        <label htmlFor="" className={className}>
            Female
            <input
                className="radio-button-gender"
                type={type}
                id={id}
                name={name}
                value="female"
                onChange={fieldHandler}
                onBlur={isFormValidOnBlur}
            />
        </label>
    </div>
    {errorFields[name] && <p className="danger">Gender is required</p>}
</div>
  )
}

