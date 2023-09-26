import React, { useContext , useState , useEffect } from 'react'
import "./timer.css"
import { ContextState } from '../context/Context'

function Timer() {

  const { isPlay, pplay, res , breaks , session } = useContext(ContextState)

  const [sessionOrBreak,setSessionOrBreak] = useState(false)
  
 /*  const [isPlay, setIsPlay] = useState(false) */
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(session.min)
  const [hr, setHr] = useState(session.hr)
 
  let displaySec,displayMin,displayHr

  if(sec < 10){
    displaySec = "0"+ sec
  }else{ displaySec = sec}
  if(min < 10){
    displayMin = "0"+ min
  }else{ displayMin = min}
  if(hr < 10){
    displayHr = "0"+ hr
  }else{ displayHr = hr}


  
  

  useEffect(()=>{
    if(sessionOrBreak==false){
      setMin(session.min)
      setHr(session.hr)
      setSec(0)
    }else {
      setMin(breaks.min)
      setHr(breaks.hr)
      setSec(0)
    }

  },[session.min,breaks.min,sessionOrBreak])

  useEffect(()=>{
    let interval 
    if(isPlay){

      interval = setTimeout(play, 1000);


    }
   
    return ()=>{
      clearTimeout(interval)
    }
    

  },[isPlay,sec,min])

  function play(){
    setSec(p => p - 1)
    if(hr==0&&min==0&&sec==0){
      setSessionOrBreak(!sessionOrBreak)
      setSec(0)
    }
    else if(sec==0){
      setSec(59)
      setMin(p=>p-1)
        if(min == 0){
          setMin(59)
          setHr(p=>p-1)
        }
    }
  }

  function playPause(){
    pplay()
  }

  // Reset
  function reset(){
    setMin(session.min)
    setHr(session.hr)
    setSec(0)
    res()
  }
  
  const playButton = (isPlay ? (<i className="bi bi-pause">Stop</i>): <i className="bi bi-play">Start</i>)



  return (
    <div className='timer'>
      <h2>Timer</h2>
      <h2>{sessionOrBreak ? "Break Time": "Session Time"}</h2>
      <h1>{displayHr}:{displayMin}:{displaySec}</h1>
      <div className="buttons">
        <button onClick={playPause}>{playButton}</button>
        <button onClick={reset}><i className="bi bi-arrow-counterclockwise">reset</i></button>
      </div>
    </div>
  )
}

export default Timer
