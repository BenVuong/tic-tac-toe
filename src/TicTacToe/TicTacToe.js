import React, { useState } from 'react'
import './TicTacToe.css'
const TicTacToe = () => {

    const[turn, setTurn] = useState('x')
    const[cells, setCells] = useState(Array(9).fill(''));
    const[winner, setWinner] = useState();

    const checkForWinner = (sqaures) =>{
        let combos = {
            across: [
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal: [
                [0, 4, 8],
				[2, 4, 6],
            ],
            
        };
        for(let combo in combos){
            combos[combo].forEach((pattern)=>
            {
                if (
                    sqaures[pattern[0]] === ''||
                    sqaures[pattern[1]] === ''||
                    sqaures[pattern[2]] === ''
                )
                {

                }
                else if (sqaures[pattern[0]] === sqaures[pattern[1]]&&
                        sqaures[pattern[1]] === sqaures[pattern[2]])
                {
                    setWinner(sqaures[pattern[0]]);
                }
            });
        }
    };

    const handleRestart = () =>
    {
        setWinner(null);
        setCells(Array(9).fill(''));
    }

    const handleClick = (num) =>
    {
        if(cells[num] !== '')
        {
            alert('spot already taken');
            return;
        }
        //Alternates players turn after every click

        //copies the cell array into the sqaures variable
        let squares = [...cells];

        if (turn==='x')
        {
            squares[num] = 'x'
            setTurn('o')
        }
        else
        {
            squares[num] = 'o'
            setTurn('x')
        }
        checkForWinner(squares)
        setCells(squares)
        
    };

    const Cell = ({num}) => {
        return <td onClick={()=>handleClick(num)}>{cells[num]}</td>;
    };

    

    return(
        <div >
            <h1>Tic Tac Toe</h1>
            Current player's turn: {turn}     
            <table className='container'>
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                <p>{winner} is the winner</p>
                <button onClick={()=>handleRestart()}>Play Again?</button>
                </>
            )}
        </div>
    )
}

export default TicTacToe