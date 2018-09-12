import React from "react";
import YourBotArmy from './YourBotArmy.js'
import BotCollection from './BotCollection.js'
import BotSpecs from '../components/BotSpecs.js'

class BotsPage extends React.Component {
  state = {
    bots: [],
    botArmy: [],
    selectedBot: null,
    mode: 'displayBots'
  }

  componentDidMount() {
    let url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
    fetch(url).then(res => res.json()).then(bots => this.setState({bots}))
  }

  displayBotSpecs = (bot) => {
    this.setState({
      mode: null,
      selectedBot: bot
    })
  }

  enlistBot = (bot) => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

  showAllBots = () => {
    this.setState({
      mode: 'displayBots',
      selectedBot: null
    }, () => console.log("BotsPage:", this.state))
  }

  render() {
    // console.log("BotsPage:", this.state);
    if (this.state.mode === 'displayBots') {
      return (
        <div>
          <YourBotArmy botArmy={this.state.botArmy} />
          <BotCollection bots={this.state.bots} displayBotSpecs={this.displayBotSpecs} />
        </div>
      )
    } else {
      return (
        <div>
          <YourBotArmy botArmy={this.state.botArmy} />
          <BotSpecs bot={this.state.selectedBot} enlistBot={this.enlistBot} showAllBots={this.showAllBots} />
          <BotCollection bots={this.state.bots} displayBotSpecs={this.displayBotSpecs} />
        </div>
      )
    }
  }
}

export default BotsPage;
