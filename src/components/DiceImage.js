/*******************************************
 * DiceImage -- display a photo of a single dice.
 * ****************************************/
import React from 'react';
import "../css/site.css";

export class  DiceImage extends React.Component {
	render () {
		return (
			<div style={{width: "80px", float:"left"}}>
				<img 
					style={{height:"60px", marginLeft:"1vh",  marginTop:"5px"}}
					src={require('../images/' + this.props.diceFile) } 
					alt="bad." 
				/>
			</div>
		);
	}
}

export default DiceImage;
