import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import './css/index.css'
export const ScrollBar =function (props) {

    let [percent,setPercent]=useState(0)
    

    useEffect(()=>{
        function Debounce(fn,delay){
            let time=null
            return function(){
                if(time){clearTimeout(time)}
               time= setTimeout(() => {
                    fn.call(this,...arguments)
                }, delay);
            }
        }
        
        let ScrollProcess =document.getElementById('ui-ball-process')
        let ProcessWidth=document.getElementById('progress-div')
        let  mouseDownFn=function(env){
            let left=env.clientX-ScrollProcess.offsetLeft
            document.onmousemove=Debounce(function(env){
                let realMoveLeft=env.clientX-left
                if(realMoveLeft<0){
                    realMoveLeft=0
                }else if(realMoveLeft>props.width){
                    realMoveLeft=props.width
                }
                    ScrollProcess.style.left=(realMoveLeft)+'px'
                ProcessWidth.style.width=realMoveLeft+'px'
                if(!!props.onchange){
                    props.onchange((Math.round((parseFloat( ProcessWidth.style.width)/parseFloat(props.width))*100)))
                }

                setPercent((Math.round((parseFloat( ProcessWidth.style.width)/parseFloat(props.width))*100)))
            },7)
            document.onmouseup=function(){
                document.onmousemove=null
                document.onmouseup=null
            }
        }

        ScrollProcess.addEventListener('mousedown',mouseDownFn)
    },[])
    return (
        <div id='scroll-container' style={{width:props.width,height:props.height+10}}>
        <div id='scroll-ball' style={{marginTop:5,width:props.width,backgroundColor:props.scrollColor,height:props.height,borderRadius:2}}>
            <span  id='ui-ball-process' style={{ display:'block',width:2*props.height,height:2*props.height,marginTop:-props.height/2}}></span>
        </div>
        <div id='progress-div' style={{height:props.height,backgroundColor:props.processColor}}></div>
        
        <span id='percent-span' style={{left:props.width+2*props.height+10,marginTop:-props.height/2}}>
        {percent}%
        </span>
        </div>
    )
}

ScrollBar.propTypes={
    width:PropTypes.number,
    height:PropTypes.number,
    scrollColor:PropTypes.string,
    processColor:PropTypes.string,
    onchange:PropTypes.func
}
ScrollBar.defaultProps={
    width:300,
    height:10,
    scrollColor:'#ebeef5',
    processColor:'green',
}
