import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  constructor(props){
    super(props)

    // this.state={
    //
    // }
  }

  mappedBots = () => {
    return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} />)
  }

  // handleClick = (bot) => {
  //   // console.log('hello')
  //   this.setState({
  //     myBots: [...this.state.myBots, bot]
  //   })
  // }


  render(){
    console.log('BotCollection props are: ', this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.mappedBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
