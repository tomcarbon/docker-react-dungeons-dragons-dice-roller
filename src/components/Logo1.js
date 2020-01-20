/*******************************************
 * Display the Logo1.jpg
 * ****************************************/
import React from 'react';

export function  Logo1 () {
	return (
	<img 
		style={{pointerEvents:'none'}}
		className="offical-background-color offical-logo" 
		src={require('../images/logo1.png') } alt="bad." 
	/>
	);
}

export default Logo1;
