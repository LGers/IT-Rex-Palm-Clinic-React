import React, {useState} from 'react';
import {AuthInputContent, InputIcon, ShowPasswordButton, StyledAuthInput } from './AuthInput.styles';
import {useField} from "formik";
import { ErrorMessage } from '../../AuthPage.styles';
type Props= {
    type: string
    name: string
    id: string,
    placeholder: string
    icon_url: string
}
const passwordInputType= (showPassword: boolean) => {
    return showPassword ? 'text' : 'password'
}

export const AuthInput: React.FC<Props> = (props) => {
    const [field, meta] = useField(props);
    const [showPassword, setShowPassword] = useState(false)

    const handleClick=()=>{
        setShowPassword(!showPassword)
    }

    const isPassword = () => {
        return props.type === 'password'
    }

    return (
        <AuthInputContent>
            <InputIcon {...props}/>
            {isPassword()
                ? <>
                    <StyledAuthInput error={meta.error} password_input_type={passwordInputType(showPassword)} { ...props}/>
                    <ShowPasswordButton onClick={()=>handleClick()}/>
                </>
                : <StyledAuthInput error={meta.error} { ...props}/>}

            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}

        </AuthInputContent>
    )
};