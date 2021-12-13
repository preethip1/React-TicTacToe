import React from 'react';
import Block from './Block';
import { v4 as uuidv4 } from 'uuid';



class TicTacToe extends React.Component {
    id = uuidv4()
    state = {
        firstMove : "X",
        blocks : []
    }
    
    clickAssignment(id) {
        this.state.blocks.forEach((element,index) => {
            console.log(element,index);
            // if(element.id === id) {
            //     console.log(element.id);
            // }
        })
        // console.log("clicked");
        if(this.state.firstMove === "X") {
            this.setState({firstMove: "O"})
            console.log("move",this.state.firstMove)

        }
        else {
            this.setState({firstMove : "X"})
            console.log("move",this.state.firstMove)

        }

    }

    render() { 
        return <div>
            <div className='flex flex-row'>
                <div onClick={() => this.clickAssignment()}><Block/></div> 
                <div onClick={() => this.clickAssignment()}><Block/></div> 
                <div onClick={() => this.clickAssignment()}><Block/></div> 
            </div>
            <div className='flex flex-row'>
                <div onClick={() => this.clickAssignment()}><Block/></div> 
                <div onClick={() => this.clickAssignment()}><Block/></div> 
                <div onClick={() => this.clickAssignment()}><Block/></div> 
            </div>
            <div className='flex flex-row'>
                <div onClick={() => this.clickAssignment()}><Block/></div> 
                <div onClick={() => this.clickAssignment()}><Block/></div> 
                <div onClick={() => this.clickAssignment()}><Block/></div> 
            </div>
        </div>;
    }
}
 
export default TicTacToe;