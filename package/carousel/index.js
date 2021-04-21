import React,{useRef,useEffect} from 'react'
import PropTypes from 'prop-types'
import './css/index.css'
export const Carousel =function (props) {
    const Div=useRef()
    let AutoChange=useRef()
    let NumberArray=new Array(props.methods.length).fill(0).map((val,key)=>{return key})
    const [Index,setIndex]=React.useState(1);
    let settimefn=() => {
        let Carousel=document.getElementById('Carousel')
        let AllI=Carousel.getElementsByTagName('i')
        for(let val of AllI){
            val.style.backgroundColor='#ffffff'
            val.style.width='20px'
                }
        setIndex((state)=>{
            if(state==NumberArray.length)
            {   
                 AllI[0].style.backgroundColor='black'
                 AllI[0].style.width='40px'
                 Div.current.style.transform=`translateX(0px)`;
                 return 1
            }
        Div.current.style.transform=`translateX(${-props.width*(state)}px)`;
        AllI[state].style.backgroundColor='black'
        AllI[state].style.width='40px'
        return state+1})}

    let setIkey=(key)=>{
        let Carousel=document.getElementById('Carousel')
        let AllI=Carousel.getElementsByTagName('i')
        for(let val of AllI){
            val.style.backgroundColor='#ffffff'
            val.style.width='20px'
                }
        AllI[key].style.width='40px';
        AllI[key].style.backgroundColor='black'
       
    }

    useEffect(()=>{
             AutoChange.current =setInterval(settimefn, props.time);
             return()=>{
                clearInterval(AutoChange.current)
             }
    },[])
    return (
        <div id='Carousel' style={{position:'relative', width:props.width,height:props.height,overflow:'hidden'}}>
            <div id='all-Carousel' ref={Div} style={{width:props.width*NumberArray.length,height:props.height}}>  {props.methods.map((val,key)=>{return <div key={key} style={{textAlign:'center',display:'inline-block',width:props.width,height:props.height,verticalAlign:'middle', overflow:'hidden'}}>{val}</div> })}</div>
           
                <span style={{display:'block', width:'100%',height:5,textAlign:'center',position:'absolute',top:'80%'}}> 
                    {NumberArray.map((_,key)=>{
                        if(key===0){return(<i  key={key} id='Carousel-button' onMouseEnter={(env)=>{ setIkey(key); Div.current.style.transform=`translateX(${-key*props.width}px)`;setIndex(()=>key+1);clearInterval(AutoChange.current);AutoChange.current =setInterval(settimefn, props.time);}}
                        onMouseLeave={()=>{
                        }}
                        style={{display:'inline-block',width:40,height:5, borderRadius:2,backgroundColor:'black',marginRight:5,cursor:'pointer'}}>
                        </i>)}
                    return(<i  key={key} id='Carousel-button' onMouseEnter={(env)=>{ setIkey(key); Div.current.style.transform=`translateX(${-key*props.width}px)`;setIndex(()=>key+1);clearInterval(AutoChange.current);AutoChange.current =setInterval(settimefn, props.time);}}
                    onMouseLeave={()=>{
                    
                    }}
                    style={{display:'inline-block',width:20,height:5, borderRadius:2,backgroundColor:'#ffffff',marginRight:5,cursor:'pointer'}}>
                    </i>) })}     
                </span>
            
        </div>
    )
}

Carousel.propTypes={
    width:PropTypes.number,
    height:PropTypes.number,
    methods:PropTypes.array,
    time:PropTypes.number
}
Carousel.defaultProps={
    width:400,
    height:160,
    time:2000,
    methods:[1,2,3,4,5,6]
}