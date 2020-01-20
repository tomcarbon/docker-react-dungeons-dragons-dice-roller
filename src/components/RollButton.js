/*******************************************
 * RollButton
			<button className="official-roll-buttonstyle">ROLL</button>
 * ****************************************/
import React from 'react';
import "../css/site.css";

export class  RollButton extends React.Component {
	shoot = () => {
		var max = 1;
		switch (this.props.diceType) {
			case "d20":
				max = 20;
				break;
			case "d12":
				max = 12;
				break;
			case "d10":
				max = 10;
				break;
			case "d10 (x10)":
				max = 10;
				break;
			case "d8":
				max = 8;
				break;
			case "d6":
				max = 6;
				break;
			case "d4":
				max = 4;
				break;
			default: alert("weird default case detected " + this.props.diceType + " in RollButton()");break;
		}
		let rand = Math.floor((Math.random() * max)) + 1;
		if (this.props.diceType === "d10 (x10)") {
			rand = rand * 10;
			if (rand === 100) {
				rand = "00";
			}
		}
		this.props.updateRandValue(rand);

	}

	render () {
		return (
			<div style={{
                                float:"left",
                                marginLeft:"1%",
                                height:"70px",
                                width:"65px",
                                background:"rgba(0,0,0,0)",
                                textAlign:"center",
                                fontSize:"5vh"
                        }}>
				<button 
					className="official-roll-buttonstyle"
					onClick={this.shoot}
				>
					ROLL
				</button>
			</div>
		);
	}
}

export default RollButton;
