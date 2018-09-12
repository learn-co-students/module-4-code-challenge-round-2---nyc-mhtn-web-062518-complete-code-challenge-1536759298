import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showing: false
    }
  }


  renderEachBot = () =>{
    if(this.state.showing === false){
      return this.props.allBots.map(bot => <BotCard handleClick={this.props.handleClick} key={bot.id} bot={bot} />)
    }
  }

  //set showing state to true to hide all bots on click, render botSpecs
  //botSpecs wont render
  // showSpecs = (props) => {
  //   console.log('showing specs', props)
  //   this.setState({showing: true})
  //   return <BotSpecs bot={props} />
  // }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderEachBot()}
          {this.showSpecs}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
