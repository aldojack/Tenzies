import { useState, useEffect } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import './App.css'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice])

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
    if (!tenzies)
    {
      setDice(prevState => {
        return prevState.map(dice => {
          return dice.isHeld ?
            { ...dice } : generateNewDie()
        })
      })
    }
    else {
      setDice(allNewDice());
      setTenzies(false);
    }
  }

  function holdDie(id) {
    const allHeld = dice.every(die => die.isHeld);

    if (!allHeld) {
      setDice(prevState => {
        return prevState.map(die => {
          return die.id === id ? {...die, isHeld: !die.isHeld} : die
        })
      })
    }
  }

  const diceElements = dice.map((die) => {
    return (
        <Die className='dice' key={die.id} {...die} handleClick={() => holdDie(die.id)} />
    )
  })

  return (
    <main>
    {tenzies && <Confetti/>}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll untill all dice are the same.  Click each die to hold at its current value between rolls.  </p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-btn' onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button>
    </main>
  )
}

export default App
