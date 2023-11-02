import React, { Fragment } from "react";
import { useState } from "react";
import { TextInput } from "./TextInput/TextInput";
import { RadioInput } from "./radio/RadioInput";
import { CheckboxInput } from "./checkbox/checkboxInput";
import { SelectOption } from "./selectOption.jsx/SelectOption";

//1. Validation on onBlur and OnSubmit
//2. Validation on OnChange

const Form = () => {
    const [fields, setFields] = useState({
        firstname: "",
        email: "",
        gender: "",
        languages: [],
        date: "",
        country: "",
    });

    const [errorFields, setErrorFields] = useState({
        firstname: false,
        email: false,
        gender: false,
        languages: false,
        date: false,
        country: false,
    });

    const fieldHandler = (event) => {
        setFields((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        isFormValidOnBlur(event);
    };
    console.log(fields);

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        const value = event.target.value;

        setFields((prevState) => {
            if (isChecked) {
                // Add the value to the array to the existing values
                return {
                    ...prevState,
                    languages: [...prevState.languages, value],
                };
            } else {
                // Remove the value from the array, if the item is clicked again
                //When the checkbox is unchecked, remove the value from the languages array using the filter method and creating a new state object.
                return {
                    ...prevState,
                    languages: prevState.languages.filter((item) => item !== value),
                };
            }
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();
        /*   this if condition works only if anything is returned by isFormValidOnSubmit() */
        /*    if returned true ,returns valid  */

        if (isFormValidOnSubmit()) {
            console.log("This is valid");
            return;
        }
        /* if returned false it comes here */
        console.log("This is InValid");
    };

    //SOLUTION 1

    const isFormValidOnBlur = (event) => {
        const { name, value } = event.target;

        let error = false;
        if (name === "firstname" && value === "") {
            error = true;
        } else if (
            name === "email" &&
            (value === "" || !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value))
        ) {
            error = true;
        } else if (name === "gender" && value === "") {
            error = true;
        } else if (name === "languages" && value.length === 0) {
            error = true;
        } else if (name === "date" && value === "") {
            error = true;
        } else if (name === "country" && value === "") {
            error = true;
        }
        setErrorFields((prev) => ({ ...prev, [name]: error }));
    };
    console.log(errorFields);

    /*   if (isFormValid()) {
            console.log("This is invalid");
            return;
        }
        console.log("This is valid"); 
    };*/

    //SOLUTION 1
    /*  
    const isFormValid = () => {
        if (fields.firstname === "") {
            setErrorFields((prev) => ({ ...prev, firstname: true }));
            return true;
        } else {
            setErrorFields((prev) => ({ ...prev, firstname: false }));
        }
        return false;
    };
 */
    //SOLUTION 2

    const isFormValidOnSubmit = () => {
        const errors = {
            firstname: false,
            email: false,
            gender: false,
            languages: false,
            date: false,
            country: false,
        };

        if (fields.firstname === "") {
            errors.firstname = true;
        }

        if (fields.email === "") {
            errors.email = true;
        }

        if (fields.gender === "") {
            errors.gender = true;
        }

        if (fields.languages.length === 0) {
            errors.languages = true;
        }
        if (fields.date === "") {
            errors.date = true;
        }

        if (fields.country === "") {
            errors.country = true;
        }

        setErrorFields(errors);

        /*     if anything in error is true, its invalid and should not submit */
        if (Object.values(errors).some((error) => error === true)) {
            console.log(Object.values(errors));
            return false;
        }
        return true;

        //Object.values(errors) now errors object become an array and some check if any of the values are opposite
    };

    return (
        <Fragment>
            <form action="" onSubmit={formSubmit} noValidate autoComplete="off">
                <h1>Register</h1>
                <p className="caption">Please fill the form</p>

                <TextInput
                    fieldHandler={fieldHandler}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                    label="First Name"
                    id="firstname"
                    name="firstname"
                    type="text"
                />

                <TextInput
                    fieldHandler={fieldHandler}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                />

                <RadioInput
                    className="radio-buttons"
                    type="radio"
                    id="gender"
                    name="gender"
                    fieldHandler={fieldHandler}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                />

                <CheckboxInput
                    handleCheckboxChange={handleCheckboxChange}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                    name="languages"
                    type="checkbox"
                />

                <TextInput
                    fieldHandler={fieldHandler}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                    label="Date"
                    id="date"
                    name="date"
                    type="date"
                />

                <SelectOption
                    fieldHandler={fieldHandler}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                    name="country"
                    id="country"
                />

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </Fragment>
    );
};

export default Form;
