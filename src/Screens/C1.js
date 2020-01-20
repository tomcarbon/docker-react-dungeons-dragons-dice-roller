/*******************************************
* C1.js -- Services
* *****************************************/
import React from "react";
import "../css/site.css";

class C1 extends React.Component {

  render() {
      return (
          <div className="official-background-color official-body" >
		<h2 >About this Program</h2>
		<hr style={{width:"90%"}} />
		<h4>Use the DICE section to role different dice - d4, d6, d8, d10 (x2), d12, d20</h4>
		<h4>Use the TEXT section to quietly display private messages to a player/character.</h4>
		<hr style={{width:"90%"}} />
		<h5>
			This application is available for free on github: 
			<a href="https://github.com/tomcarbon/docker-react-dungeons-dragons-dice-roller">more info</a>
		</h5>
          </div>
      );
  }
}

export default C1;
