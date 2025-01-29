import styles from './Game.module.css';
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

function Game() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [resultMessage, setResultMessage] = useState("");
    const [winningScore, setWinningScore] = useState(3);
    const [gameOver, setGameOver] = useState(false);

    const choices = ["Rock", "Paper", "Scissors"];

    const gameLogic = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) return "It's a Draw!";
        if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Scissors" && computerChoice === "Paper") ||
            (playerChoice === "Paper" && computerChoice === "Rock")
        ) {
            return "You Win!";
        }
        return "Computer Wins!";
    };

    const gameDecision = (playerChoice) => {
        if (gameOver) return;

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setPlayerChoice(playerChoice);
        setComputerChoice(computerChoice);

        const result = gameLogic(playerChoice, computerChoice);
        setResultMessage(result);

        if (result === "You Win!") {
            setPlayerScore((prev) => {
                const newScore = prev + 1;
                if (newScore >= winningScore) {
                    setGameOver(true);
                    setResultMessage("You Win the Game!");
                }
                return newScore;
            });
        } else if (result === "Computer Wins!") {
            setCompScore((prev) => {
                const newScore = prev + 1;
                if (newScore >= winningScore) {
                    setGameOver(true);
                    setResultMessage("Computer Wins the Game!");
                }
                return newScore;
            });
        }
    };

    const resetGame = () => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setCompScore(0);
        setPlayerScore(0);
        setResultMessage("");
        setGameOver(false);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Rock Paper Scissors</h1>

            {/* Winning Score Input */}
            <div className={styles.scoreInput}>
                <label>Winning Score: </label>
                <input 
                    type="number" 
                    value={winningScore} 
                    onChange={(e) => setWinningScore(Number(e.target.value) || 3)}
                    min="1"
                    disabled={playerScore > 0 || compScore > 0}
                />
            </div>

            {/* Game Controls */}
            <div className={styles.btn}>
                {choices.map((choice, index) => {
                    const icons = { Rock: <FaHandRock />, Paper: <FaHandPaper />, Scissors: <FaHandScissors /> };
                    return (
                        <motion.button
                            key={index}
                            className={styles.options}
                            onClick={() => gameDecision(choice)}
                            disabled={gameOver}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {icons[choice]} {choice}
                        </motion.button>
                    );
                })}
            </div>

            {/* Display Results with Animation */}
            <div className={styles.result}>
                <p>Your choice:</p>
                {playerChoice && (
                    <motion.div
                        className={styles.choiceIcon}
                        animate={{ x: [0, 10, -10, 10, -10, 10, -10, 10, 0] }}
                        transition={{ duration: 1.0 }}
                    >
                        {playerChoice === "Rock" ? <FaHandRock size={50} /> :
                         playerChoice === "Paper" ? <FaHandPaper size={50} /> :
                         <FaHandScissors size={50} />}
                    </motion.div>
                )}

                <p>Computer's choice:</p>
                {computerChoice && (
                    <motion.div
                        className={styles.choiceIcon}
                        animate={{ x: [0, 10, -10, 10, -10, 10, -10, 10, 0] }}
                        transition={{ duration: 1.0 }}
                    >
                        {computerChoice === "Rock" ? <FaHandRock size={50} /> :
                         computerChoice === "Paper" ? <FaHandPaper size={50} /> :
                         <FaHandScissors size={50} />}
                    </motion.div>
                )}

                <h2 className={styles.message}>{resultMessage}</h2>
                <p>Player Score: <strong>{playerScore}</strong></p>
                <p>Computer Score: <strong>{compScore}</strong></p>
            </div>

            {/* Reset or Play Again Button */}
            {gameOver ? (
                <motion.button
                    className={styles.resetbtn}
                    onClick={resetGame}
                    whileHover={{ scale: 1.1 }}
                >
                    Play Again
                </motion.button>
            ) : (
                <motion.button
                    className={styles.resetbtn}
                    onClick={resetGame}
                    whileHover={{ scale: 1.1 }}
                >
                    Reset Game
                </motion.button>
            )}

            <p className={styles.thanks}>THANK YOU FOR PLAYING!!!</p>
        </div>
    );
}

export default Game;


