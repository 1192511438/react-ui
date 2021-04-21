

import React from 'react'

interface CarouselProps{
    width?:number,
    height?:number,
    time?:number,
    methods?:Array<JSX.Element|number|string>
}


export declare const Carousel:React.FC<CarouselProps>