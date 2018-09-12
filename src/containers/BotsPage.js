import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      robots: [],
      botArmy: []
    }

  }



  handleClick = (robot) => {
    let robotArray = this.state.botArmy;

    if (!this.state.botArmy.includes(robot)){
      robotArray.push(robot)
      this.setState({ botArmy: robotArray })
    } else if (this.state.botArmy.includes(robot) ) {
      let i = this.state.botArmy.indexOf(robot)
      this.setState({ botArmy: robotArray.splice(i+1, 1) })
    }
  }

  componentDidMount() {
    fetch(URL)
    .then( res => res.json() )
    .then( data => this.setState({ robots: data }) )
  }

  render() {
    console.log("MY ROBOT ARMY IS GROWING:", this.state.botArmy)
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleClick={this.handleClick}/>
        <BotCollection handleClick={this.handleClick} robots={this.state.robots} />
      </div>
    );
  }

}

export default BotsPage;
