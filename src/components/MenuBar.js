/*******************************************
 * MenuBar.js
 * ****************************************/
import React from 'react';
import "../css/site.css";

class MenuBar extends React.Component {

	render() {
		var handleToUpdate = this.props.handleToUpdate;
		return (
			<div className="official-menu-color official-menubar" >
				<div className="official-menu-title-text">
					D&D Dice Roller and DM Tool Kit
				</div>
				<span>
				<button 
					className="official-menu-buttonstyle"
					onClick={() => handleToUpdate('A1')}>
					DICE
				</button>

				<button 
					className="official-menu-buttonstyle"
					onClick={() => handleToUpdate('B1')}>
					TEXT
				</button>

				<button className="official-menu-buttonstyle"
					style={{float:"right", marginRight:"10px", color:"gray"}} 
					onClick={() => handleToUpdate('C1')}>
					ABOUT
				</button>

				</span>
			</div>
		);
	}
}

export default MenuBar;
