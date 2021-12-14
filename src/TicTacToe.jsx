import React from 'react';
import Block from './Block';

class TicTacToe extends React.Component {
    state ={
        blocks : [-1,-1,-1,-1,-1,-1,-1,-1,-1],
        currrentPlayer : 'X',
        winner : ''
    }

    clickAssignment(e,index){
        if (this.state.winner !== ''){
            return
        }
        if(this.state.blocks[index] === -1){
            let target = e.target;
            target.innerText = this.state.currrentPlayer;
            let updatedBlocks = this.state.blocks;
            updatedBlocks[index] = this.state.currrentPlayer
            this.setState({blocks : updatedBlocks});
            let result = this.WinningCondition();
            if(result === -1) {
                if(this.state.currrentPlayer === "X") {
                    this.setState({currrentPlayer : 'O'});
                } else {
                    this.setState({currrentPlayer : 'X'})
                }
            } else {
                this.setState({winner:result})
                 setTimeout(() => {
                    if(result === 'D') {
                        alert("Draw");
                    }
                    if(result === 'X') {
                        alert("Player 1 is the winner");
                    }
                    if(result === 'O') {
                        alert("Player 2 is the winner");
                    }
                 }, 1); 
            }
        } 
    } 

    WinningCondition() {
        let winner = -1
        let blocks = this.state.blocks;
        if(blocks[0] === blocks[1] && blocks[1] === blocks[2]) {
            if(blocks[0] === 'X') {
                winner = 'X'
                return winner;
            } else if(blocks[0] === 'O') {
                winner = 'O'
                return winner;
            }
        }
         if(blocks[3] === blocks[4] && blocks[4] === blocks[5]) {
            if(blocks[3] === 'X') {
                winner = 'X'
                return winner;
            } else if(blocks[3] === 'O') {
                winner = 'O'
                return winner;
            }
        }
        if(blocks[6] === blocks[7] && blocks[7] === blocks[8]) {
            if(blocks[6] === 'X') {
                winner = 'X'
                return winner;
            } else if(blocks[6] === 'O') {
                winner = 'O'
                return winner;
            }
        }
        if(blocks[0] === blocks[3] && blocks[3] === blocks[6]) {
            if(blocks[0] === 'X') {
                winner = 'X'
                return winner;
            } else if(blocks[0] === 'O'){
                winner = 'O'
                return winner;
            }
        }
        if(blocks[1] === blocks[4] && blocks[4] === blocks[7]) {
            if(blocks[4] === 'X') {
                winner = 'X'
                return winner;
            } else if(blocks[4] === 'O'){
                winner = 'O'
                return winner;
            }
        }
        if(blocks[2] === blocks[5] && blocks[5] === blocks[8]) {
            if(blocks[2] === 'X') {
                winner = 'X'
                return winner;
            } else if(blocks[2] === 'O'){
                winner = 'O'
                return winner;
            }
        }
        if(blocks[0] === blocks[4] && blocks[4] === blocks[8]) {
            if(blocks[4] === 'X') {
                winner = 'X'
                return winner;
            } else if(blocks[4] === 'O') {
                winner = 'O'
                return winner;
            }
        }
        if(blocks[2] === blocks[4] && blocks[4] === blocks[6]) {
            if(blocks[4] === 'X') {
                winner = 'X'
                return winner;
            } else if(blocks[4] === 'O') {
                winner = 'O'
                return winner;
            }
        }
        let count = 0;
        this.state.blocks.forEach((element) => {
            if(element === -1) {
               count = count + 1; 
            }
        })
        if(count === 0) {
            winner = 'D';
            return winner
        } else {
            winner = -1 
            return winner 
        }
    }

    render() { 
        return <div>
            <div className='flex flex-row'>
                <div onClick={(e) => this.clickAssignment(e,0)}><Block/></div> 
                <div onClick={(e) => this.clickAssignment(e,1)}><Block/></div> 
                <div onClick={(e) => this.clickAssignment(e,2)}><Block/></div> 
            </div>
            <div className='flex flex-row'>
                <div onClick={(e) => this.clickAssignment(e,3)}><Block/></div> 
                <div onClick={(e) => this.clickAssignment(e,4)}><Block/></div> 
                <div onClick={(e) => this.clickAssignment(e,5)}><Block/></div> 
            </div>
            <div className='flex flex-row'>
                <div onClick={(e) => this.clickAssignment(e,6)}><Block/></div> 
                <div onClick={(e) => this.clickAssignment(e,7)}><Block/></div> 
                <div onClick={(e) => this.clickAssignment(e,8)}><Block/></div> 
            </div>
        </div>;
    }
}
 
export default TicTacToe;