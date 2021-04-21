import React from 'react'

interface ScrollBar{
    width?:number,
    height?:number,
    scrollColor?:string,
    processColor?:string,
    onchange?:(percent?:number)=>any

}


export declare const ScrollBar:React.FC<ScrollBar>

