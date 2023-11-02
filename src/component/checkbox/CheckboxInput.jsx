import React from "react";

export const CheckboxInput = ({handleCheckboxChange, isFormValidOnBlur, errorFields, name, type}) => {
    return (
        <div className="input-section dropdown-section">
            <label htmlFor="">Languages: </label>
            <label htmlFor="javascript" className="check-groups">
                <input
                    type={type}
                    id="javascript"
                    name={name}
                    value="javascript"
                    onChange={handleCheckboxChange}
                    onBlur={isFormValidOnBlur}
                />
                Javascript
            </label>
            <label htmlFor="css" className="check-groups">
                <input   type={type} id="css" name={name} value="css" onChange={handleCheckboxChange} onBlur={isFormValidOnBlur} />
                CSS
            </label>
            <label htmlFor="html" className="check-groups">
                <input   type={type} id="html" name={name} value="html" onChange={handleCheckboxChange} onBlur={isFormValidOnBlur} />
                HTML
            </label>
            <label htmlFor="php" className="check-groups">
                <input type={type} id="php" name={name} value="php" onChange={handleCheckboxChange} onBlur={isFormValidOnBlur}  />
                Php
            </label>
            {errorFields[name] && <p className="danger">Language is required</p>}
        </div>
    );
};
