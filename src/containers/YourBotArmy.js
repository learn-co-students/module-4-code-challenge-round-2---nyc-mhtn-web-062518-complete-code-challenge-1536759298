import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props) {
    super(props)
  }
  //your bot army code here...

  render(){

    let botArmyArray = this.props.botArmy.map(bot => <BotCard bot={bot} key={bot.id} />)

  console.log("YourBotArmy:", this.props);

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botArmyArray}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
