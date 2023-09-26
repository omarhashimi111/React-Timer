import React,{useContext, useEffect} from 'react'
import "./remote.css"
import { ContextState } from '../context/Context'

function Remote() {
    
    const {isPlay , session , breaks , increase , decrease } = useContext(ContextState)

    let min = 0
    let hr = 0
    let breakMin,breakHr

    
    if(session.min < 10){
        min = "0" + session.min
    }else{
        min = session.min
    }

    if(session.hr < 10 ){
        hr = "0" + session.hr
    }else{
        hr = session.hr
    }
    if(breaks.min < 10){
        breakMin = "0" + breaks.min
    }else{
        breakMin = breaks.min
    }

    if(breaks.hr < 10 ){
        breakHr = "0" + breaks.hr
    }else{
        breakHr = breaks.hr
    }
    useEffect(()=>{
        let button = document.getElementById("session-increment")
        let button2 = document.getElementById("dec-session")
        let button3 = document.getElementById("break-increment")
        let button4 = document.getElementById("dec-break")
        if(isPlay){
            button.disabled = true
            button2.disabled = true
            button4.disabled = true
            button3.disabled = true
        }else{
             button.disabled = false
             button2.disabled = false
             button4.disabled = false
             button3.disabled = false
        }
    },[isPlay])
   

  return (
    <div className='remote'>

        <div className="session-container">
            <div className="title">Session</div>
            <div className="control">
                <button id='session-increment' onClick={() => increase("session-increment")}><i className="bi bi-arrow-up"></i></button>
                <div id="session">{hr}:{min}</div>
                <button id='dec-session' onClick={() => decrease("session")}><i className="bi bi-arrow-down"></i></button>
            </div>
        </div>

        <div className="break-container">
            <div className="title">Break</div>
            <div className="control">
                <button id='break-increment' onClick={() => increase("break-increment")}><i className="bi bi-arrow-up"></i></button>
                <div id="break">{breakHr}:{breakMin}</div>
                <button id='dec-break' onClick={() => decrease("break")}><i className="bi bi-arrow-down"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Remote
