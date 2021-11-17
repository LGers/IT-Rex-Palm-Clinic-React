import React from 'react';
import styled from "styled-components";

const StyledTimeRadioInput = styled.div`
  
  & label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    background: #FFFFFF;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 8px;
    width: 100%;
    height: 100%;
    caret-color: transparent;

    &:hover {
      color: #fff;
      background-color: #476CD3;
    }
  }

  & input:disabled + label {
    background: #DCE0EC;
    color: #fff;
    cursor: default;
  }

  & input:checked ~ label {
    color: #7297FF;
    border: 1px solid #7297FF;

    &:hover {
      color: #fff;
    }
  }
  & input {
    display: none;
  }
  
`

export const Label = styled.div`
  width: 104px;
  height: 40px;
`

export const TimeRadioInput = (props) => {

    return (
        <StyledTimeRadioInput {...props}>
            <Label>
                <input type="radio"
                       id={props.checkboxId}
                       disabled={props.disabled}
                       name={props.name}/>
                <label htmlFor={props.checkboxId}>{props.time} </label>
            </Label>
        </StyledTimeRadioInput>
    )
};