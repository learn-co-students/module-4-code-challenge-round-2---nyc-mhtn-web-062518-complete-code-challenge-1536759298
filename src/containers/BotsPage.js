import React from "react";
import YourBotArmy from './YourBotArmy.js'
import BotCollection from './BotCollection.js'

class BotsPage extends React.Component {
  state = {
    bots: [],
    botArmy: []
  }
  //start here with your code for step one


componentDidMount() {
  let url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
  fetch(url).then(res => res.json()).then(bots => this.setState({bots}))
}

  enlistBot = (bot) => {
    console.log(bot)
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

  render() {
    // console.log("BotsPage:", this.state);
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} />
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;
