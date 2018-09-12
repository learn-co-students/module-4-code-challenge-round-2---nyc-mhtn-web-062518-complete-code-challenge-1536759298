import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props){
    super(props)
  }

  renderBotArmy = () => {
    console.log(this.props.botArmy)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
