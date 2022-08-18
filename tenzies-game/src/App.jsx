import { useState } from 'react'
import Dice from './components/Dice'
import './App.css'

function App() {
const [dice, setDice] = useState(["1","2","3","4","5","6","2","3","4","5"])
  return (
    <main>
      <Dice dice={dice} />
    </main>
  )
}

export default App
