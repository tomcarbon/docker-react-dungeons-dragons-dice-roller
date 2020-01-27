/*******************************************
 * MenuBar.js
 * ****************************************/
import React from 'react';
import "../css/site.css";

class MenuBar extends React.Component {

	render() {
		var handleToUpdate = this.props.handleToUpdate;
		return (
			<div className="official-background-color official-menubar" >
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

				<button 
					className="official-menu-buttonstyle"
					onClick={() => handleToUpdate('C1')}>
					ABOUT
				</button>

				</span>
			</div>
		);
	}
}

export default MenuBar;
