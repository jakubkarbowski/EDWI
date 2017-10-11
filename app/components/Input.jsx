import React from 'react'

export default class Input extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: '',
		}
		this.buttonHandler = this.buttonHandler.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}
	buttonHandler(){
		console.log("Działam!")
	}
	handleInput(e){
		this.setState({
			value: e.target.value
		});
	}
	render(){
		return ( 
			<aside id="inputArea" className = "container">
				<input placeholder = "Enter your webpage here" className = "webInput" value ={this.state.value} onChange={this.handleInput}/>
				<button className = "webButton" onClick = {this.buttonHandler}>Start</button>
			</aside> 
		)
	}
}