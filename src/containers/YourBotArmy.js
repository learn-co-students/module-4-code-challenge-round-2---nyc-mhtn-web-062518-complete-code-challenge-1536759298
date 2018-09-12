import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     enlistedOrNot: false
  //   }
  // }

  // handleClickedBot = event => {
  //   // console.log(event.target);
  // }

  // I am adding local state here, but I think that it might make more sense to have this in the BotsPage component where the rest of my state is 

  render(){
    // console.log(this.props.enlistedBots);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.enlistedBots.map(bot => {
              return <BotCard key={bot.id} bot={bot} />
            })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
