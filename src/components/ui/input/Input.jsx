import React from 'react'

export default function Input(props) {
    return (
        <>
        <input
        id={props.id}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onKeyUp={props.onKeyUp}
        className={props.className}
        placeholder={props.placeholder}
        style={props.customStyles}
      />  
        </>
    )
}
