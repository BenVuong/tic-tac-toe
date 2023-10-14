import React, { useState } from 'react'
import './TicTacToe.css'
const TicTacToe = () => {

    const[turn, setTurn] = useState('x')
    const[cells, setCells] = useState(Array(9).fill(''));


    const handleClick = (num) =>
    {
        //alert(num);
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
        setCells(squares)
        console.log(squares)
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
        </div>
    )
}

export default TicTacToe