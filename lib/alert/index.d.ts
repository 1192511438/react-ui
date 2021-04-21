import React from 'react'

declare const AlertTypes: ["default", "big", "small"];
declare type AlertType = typeof AlertTypes[number];

declare const AlertShapes:['round','circle']

declare type AlertShape=typeof AlertShapes[number]

declare  const AlertMessages :['warn','success','error']
declare type AlertMessage=typeof AlertMessages[number]

 interface AlertProps{
    type?:AlertType|number,
    color?:string,
    shape?:AlertShape,
    message?:AlertMessage,
    Time?:number
 }

export declare const Alert :React.FC<AlertProps>