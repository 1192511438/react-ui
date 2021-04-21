import React,{useRef} from 'react'
import './css/index.css'
import PropTypes, { func } from 'prop-types'
export const Form= function (props) {
        const [IsClick,setIsClick]=React.useState(true)

    const Foucs=(env)=>{
           env.target.style.border='2px solid blue'
        }
        const TextBlur=(env)=>{
            if(props.usernameRule.test(env.target.value)){
                env.target.style.border='2px solid #b7eb8f'
               
            }else{
                env.target.style.border='2px solid red'
                warnUSERRef.current.innerHTML='请输入符合格式账号！'
                setTimeout(() => {
                    warnUSERRef.current.innerHTML=null;
                    env.target.style.border='1px solid #d9d9d9'

                }, 3000);
            } }
        const PasFocus=()=>{
            pasDiv.current.style.border='2px solid blue'
        }
        const PasswordBlur=(env)=>{

            if(props.passwordRule.test(env.target.value)){
                pasDiv.current.style.border='2px solid #b7eb8f'
            }else{
                pasDiv.current.style.border='2px solid red'
                warnPASSRef.current.innerHTML='请输入符合格式密码！'
                setTimeout(() => {
                    warnPASSRef.current.innerHTML=null;
                    pasDiv.current.style.border='1px solid #d9d9d9'
                }, 3000);
            }
        }
        const warnUSERRef=useRef()
        const warnPASSRef=useRef()
        const pasDiv=useRef()
        const pasInput=useRef()
        const userInput=useRef()

        
    return (
        <div style={{height:230,width:500}} id='form-ui'>
           
            <div className='lyl-nickname-div'> 
                <label id='lyl-ui-nickname-label' htmlFor='input-nickname'> Username:</label>
                <input ref={userInput} id='input-nickname' type='text' onFocus={Foucs} onBlur={TextBlur}></input>
                <div ref={warnUSERRef} id='warn-username'></div>
            </div>
            
            <div className='lyl-nickname-div'>
                <label id='lyl-password-label' htmlFor='password-input'>Password:</label>
                <div id='pas-div' ref={pasDiv}><input ref={pasInput} id='password-input' type='password' onFocus={PasFocus} onBlur={PasswordBlur}></input> 
                
                
                <span  className='eye-svg' onClick={()=>{if(pasInput.current.type==='text') {pasInput.current.type='password';setIsClick(true)}else{pasInput.current.type='text';setIsClick(false)}}}>
                    {IsClick?(<svg viewBox="64 64 896 896" focusable="false"  width="20px" height="20px" fill="currentColor" aria-hidden="true">
                        <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                        <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                    </svg>):(<svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>)}
                </span>

                </div>
                
                <div ref={warnPASSRef} id='warn-password'></div>

                <div className='ui-form-sumbit'>
                    <button id='form-sumbit' onClick={props.onSumbit.bind(null,userInput,pasInput)}>登录</button>
                    <a href={props.href}>忘记密码</a>
                </div>

                
            </div>
            
        </div>
    )
}
Form.propTypes={
    usernameRule:PropTypes.object,
    passwordRule:PropTypes.object,
    onSumbit:PropTypes.func,
    href:PropTypes.string
}
Form.defaultProps={
    usernameRule:/^[a-zA-Z0-9_-]{4,16}$/,
    passwordRule:/^(\w){6,20}$/,
    onSumbit:(a,b)=>{console.log(a.current.value,b.current.value)},
    href:'#'
}