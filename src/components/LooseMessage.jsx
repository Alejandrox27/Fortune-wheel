export const LooseMessage = ({ coins, restartGame }) => {
    return(
        <>
        <h3 className="finish-text">You lost, but you won {coins} coin/s</h3>
        <button className="button" onClick={restartGame}>Restart</button>
        </>
    )
}