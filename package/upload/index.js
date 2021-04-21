import React,{useRef} from 'react'
import PropTypes, { func } from 'prop-types'
import './css/index.css'
export const Upload= function(props) {
    const uploadInput =useRef()
    const uploadContainer=useRef()
    const UploadText=useRef()

    let UploadClick=(env)=>{
       let file= env.target.files[0]
       
        var reader = new FileReader();
        reader.onload = function(event) {
            uploadContainer.current.style.backgroundImage=`url(${event.target.result})`
            UploadText.current.innerHTML=null
            console.log(uploadInput.current.value)
            if(props.callback){
                props.callback(uploadInput.current.value)
            }
        };
        reader.onprogress=function(e){
            UploadText.current.style.fontSize='14px'
            UploadText.current.innerHTML='正在加载'+`${(e.loaded/e.total)*100}% `
        }
        reader.readAsDataURL(file);
    }

    return (
        <div id='upload' ref={uploadContainer} onClick={ ()=>{uploadInput.current.click();}} style={{width:props.width,height:props.height,textAlign:'center',lineHeight:`${props.height}px`}}>
            <span ref={UploadText} id='upload-font'>+</span>
            <input onChange={UploadClick} ref={uploadInput} type='file' style={{display:'none'}}></input>
        </div>
    )
}

Upload.propTypes={
    width:PropTypes.number,
    height:PropTypes.number,
    callback:PropTypes.func
}

Upload.defaultProps={
    width:100,
    height:100
}