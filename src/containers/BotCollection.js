import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props){
    super(props)
  }


  renderEachBot = () =>{
    return this.props.allBots.map(bot => <BotCard handleClick={this.props.handleClick} key={bot.id} bot={bot} />)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderEachBot()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
