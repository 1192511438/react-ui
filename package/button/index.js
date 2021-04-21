import React,{forwardRef} from 'react'
import PropTypes from 'prop-types';
import './css/index.css'
export  const Button =forwardRef(
    (props,ref)=>{
        let type;
        if(props.type=='small'){
           type=60
        }else if(props.type=='big'){
            type=200
        }else if(props.type=='middle'){
            type=124
        }else{
            type=props.type
        }
        let radius;
        if(props.shape){
          radius= props.shape==='round'? 0:5
        }
        
        return (<button 
                onClick={props.onClick}
            id='button' onMouseOut={(env)=>{env.target.style.backgroundColor=props.color}}  
                    onMouseEnter={(env)=>{env.target.style.backgroundColor='#40a9ff'}}
                    ref={ref} 
                    style={{width:type,height:32 ,backgroundColor:props.color,borderRadius:radius}}>
                        {props.children}
                 </button>)
    
    })

Button.propTypes={
    type: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    color:PropTypes.string,
    onClick:PropTypes.func,
    shape:PropTypes.string
}

Button.defaultProps = {
    type: 'middle',
    color:"#1890ff",
    shape:'round'
  };

  

