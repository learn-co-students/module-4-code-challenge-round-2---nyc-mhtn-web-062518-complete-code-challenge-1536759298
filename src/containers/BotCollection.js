import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    let botsArray = this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} displayBotSpecs={this.props.displayBotSpecs}/>)
    // console.log("BotCollection:", this.props);
    return (
      <div className="ui four column grid">
        <div className="row">
          {botsArray}
        </div>
      </div>
    );
  }

};

export default BotCollection;
