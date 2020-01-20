/*******************************************
 * Display a die with its components.
 *****************************************/
import React from 'react';
import "../css/site.css"
import DiceImage from './DiceImage';
import RollResultDisplay from './RollResultDisplay';
import RollButton from "./RollButton";
import ClearDie from "./ClearDie";
import DiceTypeDisplay from "./DiceTypeDisplay";

class Die extends React.Component {
        constructor() {
                super ();
                this.state = {
                        diceResult: "?",
                        totalClicks: 0,
                };
        }

	/* rand is the result of the randomizer, sometimes '00', sometimes '?' */
        updateRandValue = (rand) => {
                this.setState({diceResult: rand});
                if (this.state.totalClicks === 0) {
                        this.setState({totalClicks: 1});
                } else {
                        this.setState({totalClicks: 0});
                }
        }

        render () {
                return (
                        <div style={{
                                        marginTop:      "10px",
                                        marginLeft:     "5%",
                                        textAlign:"left",
                                        width:"80%",
                                        height:"70px",
                                        background:"rgba(0,0,0,0.5)",
                                        borderRadius:"20px",
                                }}>
                                <DiceImage
                                        diceFile={this.props.diceFile}
                                />
                                <DiceTypeDisplay
                                        diceType={this.props.diceType}
                                />
                                <RollButton
                                        updateRandValue={this.updateRandValue.bind(this)}
                                        diceType={this.props.diceType}
                                />
                                <RollResultDisplay
                                        totalClicks={this.state.totalClicks}
                                        diceResult={this.state.diceResult}
                                />
                                <ClearDie
                                        updateRandValue={this.updateRandValue.bind(this)}
                                />
                        </div>
                );
        }
}

export default Die;

