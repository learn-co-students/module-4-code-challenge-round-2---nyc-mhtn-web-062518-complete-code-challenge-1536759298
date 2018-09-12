import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
    super(props)
  }



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          Collection of all bots
          {this.props.robots.map( robot => {
            return <BotCard
              key={robot.id}
              robot={robot}
              handleClick={this.props.handleClick} /> }
          )}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
