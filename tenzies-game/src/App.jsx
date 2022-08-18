import { useState } from 'react'
import Die from './components/Die'
import './App.css'

function App() {
  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map((die, index) => {
    return (
        <Die className='dice' key={index} value={die.value} />
    )
})

  function allNewDice() {
    let diceArray = Array.apply(0, Array(10))
      .map(() => {
        return {
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
