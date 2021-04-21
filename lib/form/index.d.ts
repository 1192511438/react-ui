import React from 'react'


interface FormProps{
    usernameRule?:RegExp,
    passwordRule?:RegExp,
    onSumbit?:(user:any,paw:any)=>any,
    href?:string
}



export const Form:React.FC<FormProps>