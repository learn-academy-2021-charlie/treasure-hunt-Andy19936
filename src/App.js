import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import Counter from './components/Counter'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      trys: 5,
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure})
  
    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({bombLocation: bomb})
  }




  handleGamePlay = (index) => {
    const {board} = this.state
    if(index === this.state.treasureLocation){
      board[index] = "💎"
      this.setState({board: board})
    } else if(index === this.state.bombLocation){
        board[index] = "💣"
        this.setState({board: board})
    } else {
      board[index] = "🌴"
      this.setState({
        board: board,
        trys: this.state.trys -1,
      })
    }
  }

  render(){
    console.log(this.state.treasureLocation)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id="gameboard">
          {this.state.board.map((value, index) => {
            return (
              <Square
              onClick={this.squareClick}
                value={value}
                key={index}
                index={index} handleGamePlay={this.handleGamePlay}
                squareClick={this.squareClick}

              />
            )
          })}
        </div>
        <br></br>
        <Counter trys={this.state.trys} />
      </>
    )
  }
}
export default App
