/*******************************************
 * DiceTypeDisplay
 * ****************************************/
import React from 'react';
import "../css/site.css";

export class  DiceTypeDisplay extends React.Component {
	render () {
		return (
			<div style={{
				float:"left",
				marginLeft:"1%",
				marginTop: "3vh",
				height:"7vh", 
				width:"6%", 
				background:"rgba(0,0,0,0)", 
				color:"white", 
				textAlign:"center",
				verticalAlign:"middle",
				fontSize:"18px"
			}}>
				{this.props.diceType}
			</div>
		);
	}
}
export default DiceTypeDisplay;
