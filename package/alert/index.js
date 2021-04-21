import React,{useEffect} from 'react'
import './css/index.css'
import PropTypes  from 'prop-types'
export const Alert= function (props) {
     let AlertComponent=React.useRef()
     useEffect(()=>{
         if(props.Time){
            let time= setTimeout(()=>{AlertComponent.current.style.opacity= 0;
                                    AlertComponent.current.style.height=0; 
                                     },props.Time)
         }
     })
    let type;
    let shape;
    if(props.type==='default'){type=300}else if(props.type==='small'){type=150 }else if (props.type==='big'){type=450}else{type=props.type}
    if(props.shape=='round'){shape=0}else{shape=10}
    if(props.message=='success'){
        return (
            <div id='alert' ref={AlertComponent} style={{width:type,borderRadius:shape}}>
                <svg style={{color: '#52c41a'}} id='alert-svg' viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                {props.children}
            </div>
        )
    }else if(props.message==='warn'){
       return(<div id='alert' ref={AlertComponent} style={{width:type,borderRadius:shape}}>
       <svg style={{color: '#faad14'}} viewBox="64 64 896 896"  id='alert-svg' focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>
        {props.children}
    </div>) 
    }else if(props.message==='error'){
        return(<div id='alert' ref={AlertComponent} style={{width:type,borderRadius:shape}}>
        <svg style={{color:'red'}} id='alert-svg' viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
         {props.children}
     </div>)
    }else{
        return null
    }
    
}

Alert.propTypes={
    type: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    color:PropTypes.string,
    message:PropTypes.string,
    shape:PropTypes.string,
    children:PropTypes.string,
    Time:PropTypes.number
}

Alert.defaultProps = {
    type: 'default',
    color:"#f6ffed", //绿色
    shape:'round',
    message:'success',
  };
 