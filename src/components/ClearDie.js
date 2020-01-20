/*******************************************
* ClearDie.js
*****************************************/
import React from 'react';
import "../css/site.css";

export class  ClearDie extends React.Component {

	/* reset this die */
        shoot = () => {
                this.props.updateRandValue("?");
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
                                fontSize:"5vh",
				zIndex:"1"
                        }}>
				<button 
					onClick={this.shoot}
					className="official-cleardie-buttonstyle"
				>
					clear
				</button>
			</div>
		);
	}
}

export default ClearDie;
