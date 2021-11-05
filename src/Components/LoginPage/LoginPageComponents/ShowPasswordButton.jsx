import React from "react";

export const ShowPasswordButton = (props) => {

    let eyeButtonClassName = 'password-block__eye-button'

    if (props.inputId === "password")
        if (props.state.signFormShowPassword) {
            eyeButtonClassName += " password-block__eye-button_show"
        } else {
            eyeButtonClassName += " password-block__eye-button_hide"
        }

    if (props.inputId === "confirm_password")
        if (props.state.signFormShowConfirmPassword) {
            eyeButtonClassName += " password-block__eye-button_show"
        } else {
            eyeButtonClassName += " password-block__eye-button_hide"
        }

    return <div id={"show_" + props.inputId + "_button"}
                   onClick={(e) => props.toggleShowPassword(e.target.id)}
                   className={eyeButtonClassName}/>
}