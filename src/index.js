import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class ColorGame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      target:'',
      num1: '0',
      num2: '0',
      permission: '1',
      message:''
    };
  }
  mySubmitHandler = (event)=>{
    let num;
    let nam = event.target.name;
    if(this.state.permission === '1'){
      if(nam === "num1"){ 
        num = Number(this.state.num1);
      }
      else{
        num = Number(this.state.num2);
      }
      num=num+1;
      this.setState({[nam]: num.toString()});
      if(num === Number(this.state.target)){
        this.setState({permission:'0'});
        if(nam === "num1")
          this.setState({message:"Player 1 Wins...!!"});
        else
          this.setState({message:"Player 2 Wins...!!"});
      }
    }
  }
  myInputHandler = (event)=>{
    this.setState({target : event.target.value});
    this.setState({permission : '1', num1:'0',num2:'0',message:''});
  }
  render(){
    return (
      <div>
        <h1 >The Two Player Game</h1>
        <input
          type = "text"
          onChange={this.myInputHandler}
        />
        <br/>
        <br/>
        <button onClick={this.mySubmitHandler} name="num1" className="btn btn-primary">
          Player 1: 
        </button>
        {this.state.num1}
        <br />
        <br />
        <button onClick={this.mySubmitHandler} name="num2" className="btn btn-primary">
          Player 2: 
        </button>
        {this.state.num2}
        <br />
        <br />
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

ReactDOM.render( <ColorGame />, document.getElementById('root'));
