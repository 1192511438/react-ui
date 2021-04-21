
import * as React from 'react';


declare const ButtonTypes: ["middle", "big", "small"];
 declare type ButtonType = typeof ButtonTypes[number];

declare const ButtonShapes:['circle','round']
 declare type ButtonShape = typeof ButtonShapes[number];
declare type ButtonProps={
     type?:ButtonType|number,
     color?:string,
     children?:string|number,
     onClick?:(env?:any)=>any,
     shape?:ButtonShape
}

  

export   declare  const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>>
      