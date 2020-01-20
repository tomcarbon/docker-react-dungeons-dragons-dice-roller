/*******************************************
 * MenuBar.js
 * ****************************************/
import React from 'react';
import Logo1 from './Logo1';
import "../css/site.css";

class MenuBar extends React.Component {

	render() {
		var handleToUpdate = this.props.handleToUpdate;
		return (
			<div className="official-background-color official-menubar" >
				<Logo1 />
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
					INFO
				</button>

				</span>
			</div>
		);
	}
}

export default MenuBar;
