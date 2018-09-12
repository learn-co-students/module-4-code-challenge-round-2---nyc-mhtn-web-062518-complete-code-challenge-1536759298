import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props){
    super(props)
}

  render(){
    console.log('YOURBOTARMY PROPS:', this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.botArmy.map( robot => {
              return <BotCard handleClick={this.props.handleClick} robot={robot} /> } ) }
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
