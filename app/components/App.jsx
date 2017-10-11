import React from 'react'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Input from "./Input.jsx"
import Options from "./Options.jsx"
import Screen from "./Screen.jsx"



export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			webpage: null
		}
	}
	
	
	
	render(){
		return ( 
			<div className = "web-insert">
				<Header />
				<main id="main">
					<Input />
					<Screen />
					<Options />
				</main>	
				<Footer />
			</div>	
		)
	}
}
