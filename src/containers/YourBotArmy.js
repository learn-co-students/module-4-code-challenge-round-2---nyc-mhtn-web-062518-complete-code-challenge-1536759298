import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  constructor(props){
    super(props)

    // this.state={
    //   myBots: []
    // }
  }

  showBots = () => this.state.props.myBots.map(bot => <BotCard bot={bot} key={bot.id} />)


  render(){
    console.log('YourBotArmy props are: ', this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.showBots}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
