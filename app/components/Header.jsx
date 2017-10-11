import React from 'react'

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	
	render(){
		return ( 
			<header id="header" className = "container">
				<a href="" >Header</a>
			</header>	
		)
	}
}