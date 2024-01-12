export const Body = ({ barRef, stop, buttonRef }) => {

    return(
        <>
        <div className="launch-text">
            <p>Click on "launch"</p>
        </div>
        <div className="launch-container">
            <div className="launch-bar animation-bar"
            ref={ barRef }></div>
        </div>
        <div>
            <button onClick={stop} ref={buttonRef} className="button">Launch</button>
        </div>
        </>
    )
    
}