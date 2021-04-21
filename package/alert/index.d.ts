import React from 'react'

declare const AlertTypes: ["default", "big", "small"];
declare type AlertType = typeof AlertTypes[number];

declare const AlertShapes:['round','circle']

type AlertShape=typeof AlertShapes[number]

declare const AlertMessages :['warn','success','error']
type AlertMessage=typeof AlertMessages[number]

 interface AlertProps{
    type?:AlertType|number,
    color?:string,
    shape?:AlertShape,
    message?:AlertMessage,
    Time?:number
 }

export const Alert :React.FC<AlertProps>