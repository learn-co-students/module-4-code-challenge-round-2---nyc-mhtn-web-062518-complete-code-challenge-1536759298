import React from "react";
import YourBotArmy from './YourBotArmy.js'
import BotCollection from './BotCollection.js'
import BotSpecs from '../components/BotSpecs.js'

class BotsPage extends React.Component {
  state = {
    bots: [],
    botArmy: [],
    selectedBot: null,
    mode: 'displayBots',
    input: ""
  }

  componentDidMount() {
    let url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
    fetch(url).then(res => res.json()).then(bots => this.setState({bots}))
  }

  displayBotSpecs = bot => {
    // debugger;
    this.setState({
      mode: null,
      selectedBot: bot
    })
  }

  enlistBot = bot => {
    if (!this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
    }
  }

  unenlistBot = bot => {
    let armyFilter = this.state.botArmy.filter(armyBot => {
      return armyBot.name !== bot.name
    })
    this.setState({
    botArmy: armyFilter
    })
  }


  showAllBots = () => {
    this.setState({
      mode: 'displayBots',
      selectedBot: null
    })
  }

  handleIputChange = event => {
    this.setState({input: event.target.value})
  }

  filterBots = () => {
    return this.state.bots.filter(bot => bot.name.toLowerCase().includes(this.state.input))
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} unenlistBot={this.unenlistBot}/>
        {this.state.mode === 'displayBots' ? null : <BotSpecs bot={this.state.selectedBot} enlistBot={this.enlistBot} showAllBots={this.showAllBots} />}
        {this.state.mode !== 'displayBots' ? null : <BotCollection bots={this.filterBots()} displayBotSpecs={this.displayBotSpecs} handleIputChange={this.handleIputChange} input={this.state.input} />}
      </div>
    )
  }
}


export default BotsPage;
