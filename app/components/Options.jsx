import React from 'react'

export default class Options extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	
	render(){
		return ( 
			<aside id="options" className = "container">
				<ul>
					<li>Options:</li>
				</ul>
			</aside>
		)
	}
}