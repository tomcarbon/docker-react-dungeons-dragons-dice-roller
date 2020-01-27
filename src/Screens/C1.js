/*******************************************
* C1.js -- Information
* *****************************************/
import React from "react";
import "../css/site.css";
import Logo1 from "../components/Logo1"
import Logo2 from "../components/Logo2"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class C1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			eyeOpen: 	true
		};
	}

	/* the dragon eye blinks 1x/minute */
	blink = () => {
		var x = (this.state.eyeOpen === true ? false : true);
		this.setState({eyeOpen: x});
		var that = this;

		/* does the blink */
		setTimeout(function () {
			var x = (that.state.eyeOpen === true ? false : true);
			that.setState({eyeOpen: x});
		}, 500);

		/* this makes another blink happen in 60 seconds */
		this.timer = setTimeout(function () {
			that.blink();
		}, 60000);
		
	}

	componentDidMount () {
		var that = this;
		this.timer = setTimeout(function () {
			that.blink();
		}, 60000);

	}

	componentWillUnmount () {
		clearTimeout(this.timer);
	}

	render() {
		return (
			<Container className="official-background-color official-body" >
				<Row>
					<Col xs="12">
						<Logo1 eyeOpen={!this.state.eyeOpen}/>
						<Logo2 eyeClosed={this.state.eyeOpen}/>
					</Col>
				</Row>

				<h2 >About this Program</h2>

				<hr />

				<h4>Use the DICE section to roll different dice - d4, d6, d8, d10 (x2), d12, d20</h4>

				<hr />

				<h4>Use the TEXT section to quietly display private messages to a player/character.</h4>

				<hr />
				<h5>
					This application is available for free on 
					<a href="https://github.com/tomcarbon/docker-react-dungeons-dragons-dice-roller"> github </a>
					.
				</h5>

			</Container>
		);
	}
}

export default C1;
