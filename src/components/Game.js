import styles from './Game.module.css'
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import {useState} from "react";


function Game(){
    const[playerChoice, setPlayerChoice]= useState(null)
    const[computerChoice, setComputerChoice]= useState(null)
    const[playerScore, setPlayerScore]= useState(0)
    const[compScore, setCompScore]= useState(0)

    const gameLogic = (playerChoice, computerChoice) => {
        if(playerChoice === computerChoice) return 0;
        else if((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Rock")) return 1;
        else return -1;
    }

    const gameDecision = (playerChoice) => {
        const choices = ["Rock", "Paper", "Scissors"]
        const computerChoice = choices[Math.floor(Math.random()*choices.length)]
        const val=gameLogic(playerChoice, computerChoice)

        setPlayerChoice(playerChoice)
        setComputerChoice(computerChoice)

        if(val === 1){
            setPlayerScore(playerScore + 1)
        }
        else if(val === -1)
            setCompScore(compScore + 1)
    }


    const resetGame= () => {
        setPlayerChoice(null)
        setComputerChoice(null)
        setCompScore(0)
        setPlayerScore(0)
    }

    return (
        <>
        <div className= {styles.container}>
            <h1 className= {styles.heading}> Welcome to the Rock Paper Scissors Game</h1>
        </div>

        <div className={styles.btn}>
                <button className={styles.options} onClick= {() => gameDecision("Rock")}><FaHandRock/>  Rock</button>
                <button className={styles.options} onClick= {() => gameDecision("Paper")}><FaHandPaper/>  Paper</button>
                <button className={styles.options} onClick= {() => gameDecision("Scissors")}><FaHandScissors />  Scissors</button>
        </div>

        <div className= {styles.result}>
            <p><li> Your choice : {playerChoice}</li></p>
            <p><li> Computer's Choice : {computerChoice}</li></p>
            <p><li> your score : {playerScore}</li></p>
            <p><li>computer score : {compScore}</li></p>
        </div>
        <div className="resetbtn">
            <button className={styles.resetbtn} onClick= {resetGame}>reset</button>
        </div>

        <div>
            <h1>
                <p className={styles.thanks}>THANK YOU FOR PLAYING!!!</p>
            </h1>
        </div>
        </>
    )
} 

export default Game