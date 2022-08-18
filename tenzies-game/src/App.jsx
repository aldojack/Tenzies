import { useState } from 'react'
import Die from './components/Die'
import './App.css'
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = useState(allNewDice())

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice() {
    
    let diceArray = Array.apply(0, Array(10))
      .map(() => {
        return generateNewDie()
      })
    return diceArray
  }

  function rollDice() {
    setDice(prevState => {
      return prevState.map(dice => {
        return dice.isHeld ?
          { ...dice } : generateNewDie()
      })
    })

    // setDice(allNewDice())
  }

  function holdDie(id) {
    setDice(prevState => {
      return prevState.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    })
  }

  const diceElements = dice.map((die) => {
    return (
        <Die className='dice' key={die.id} {...die} handleClick={() => holdDie(die.id)} />
    )
  })

  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll untill all dice are the same.  Click each die to hold at its current value between rolls.  </p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-btn' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
