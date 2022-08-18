import './Dice.css'

export default function Dice({dice}) {
    console.log(dice)
    const diceElement = dice.map(die => {
        return (
            <div className='dice' key={die}>{die}</div>
        )
    })
    return (
        <div className="dice-container">
            {diceElement}
        </div>
    )
}