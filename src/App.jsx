import { useState ,useContext} from 'react'
import './App.css'
import Timer from './components/timer/Timer.jsx'
import Remote from './components/remote/Remote'
import { ContextProvider } from './components/context/Context'






function App() {
  
  
  return (
    <div className="app">
      <ContextProvider>
        <Timer />
        <Remote />
      </ContextProvider>
    </div>
  )
}

export default App
