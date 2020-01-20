/***************************************************
* A1.js: DICE SCREEN
**************************************************/
import React from "react";
import Die from "../components/Die";
import "../css/site.css"


class A1 extends React.Component {

  render() {
      return (
	      <div className="official-background-color official-body">
	      	<Die 
	      		diceType="d20" 
	      		diceFile="d20.png"
	      	/>
	      	<Die 
	      		diceType="d12" 
	      		diceFile="d12.png"
	      	/>
	      	<Die 
	      		diceType="d10" 
	      		diceFile="d10.png"
	      	/>
	      	<Die 
	      		diceType="d10 (x10)" 
	      		diceFile="d10x.png"
	      	/>
	      	<Die 
	      		diceType="d8" 
	      		diceFile="d8.png"
	      	/>
	      	<Die 
	      		diceType="d6" 
	      		diceFile="d6.png"
	      	/>
	      	<Die 
	      		diceType="d4" 
	      		diceFile="d4.png"
	      	/>
	      </div>
      );
  }
}

export default A1;
