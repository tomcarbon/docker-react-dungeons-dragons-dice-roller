/*******************************************
 * Display the QR code for the mobile devices
 * ****************************************/
import React from 'react';

class QRCelphone extends React.Component {
	
	render () {
		return (
			<img 
				style={{width:"300px"}}
				src={require('../images/QRcelphone.png') } alt="offline" 
			/>
		);
	}
}

export default QRCelphone;
