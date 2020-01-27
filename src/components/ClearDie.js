/*******************************************
* ClearDie.js
*****************************************/
import React from 'react';
import "../css/site.css";
import Container from "react-bootstrap/Container";

export class  ClearDie extends React.Component {

	/* reset this die */
        cleardie = () => {
                this.props.updateRandValue("?");
        }

	render () {
		return (
			<Container style={{
                                background:"rgba(0,0,0,0)",
                                textAlign:"center",
                                fontSize:"20px",
				zIndex:"1"
                        }}>
				<button 
					onClick={this.cleardie}
					className="official-cleardie-buttonstyle"
				>
					clear
				</button>
			</Container>
		);
	}
}

export default ClearDie;
