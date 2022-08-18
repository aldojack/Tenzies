import './Die.css'

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#ffffff",
        boxShadow: props.isHeld ? "inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7)" : "",
    }
    return (
        <div className='dice' style={styles} onClick={props.handleClick}>{props.value}</div>
    )
}