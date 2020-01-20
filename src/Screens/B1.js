/*******************************************
* B1.js -- Private TextBox
********************************************/
import React from "react";
import "../css/site.css";
import TextArea from "../components/TextArea";

class B1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			textMsg: ''
		};
	}

        componentDidMount() {
                const initialText = this.props.initialText;
                this.setState({textMsg: initialText});
                this.props.newText(initialText);
        }

	updateTextArea = (a) => {
		this.setState({textMsg: a});
		this.props.newText(a);
	}

	clearContents = () =>  {
		var x = "";
		this.updateTextArea(x);
		this.props.newText(x);
	}

	render() {
		return (
			<div className="official-background-color official-body" >
				<h2>Private Messages / Notes</h2>

				<TextArea updateTextArea={this.updateTextArea} textMsg={this.state.textMsg} >
				</TextArea>
				<p></p>
				<button 
					onClick={this.clearContents} 
					className="official-menu-buttonstyle">CLEAR</button> 
			</div>
		);
	}
}

export default B1;
