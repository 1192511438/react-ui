import React from 'react'

interface UploadProps{
    width?:number,
    height?:number,
    callback?:(value:string)=>void
}




export declare const Upload:React.FC<UploadProps>