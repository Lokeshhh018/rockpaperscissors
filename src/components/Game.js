import styles from './Game.module.css'


function Game(){


    return (
        <>
        <div className= {styles.container}>
            <h1 className= " heading"> Welcome to the Rock Paper Scissors Game</h1>
            <div>
                <button>Rock</button>
                <button>Paper</button>
                <button>Scissors</button>
            </div>
        </div>
        <div className= "result">
            <p > Your choice is Rock</p>
            <p> Computer Choice is paper</p>
            <p> your score : 0</p>
            <p>computer score : 1</p>
        </div>
        <div>
            <button>reset</button>
        </div>
        </>
    )
} 

export default Game