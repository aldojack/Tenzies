import { useState } from 'react'
import Die from './components/Die'
import './App.css'
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map((die) => {
    return (
        <Die className='dice' key={die.id} value={die.value} />
    )
})

  function allNewDice() {
    let diceArray = Array.apply(0, Array(10))
      .map(() => {
        return {
          id: nanoid(),
          value: Math.ceil(Math.random() * 6),
          isHeld: false
        }
      })
    return diceArray
  }

  function rollDice() {
    setDice(allNewDice())
  }


  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-btn' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
