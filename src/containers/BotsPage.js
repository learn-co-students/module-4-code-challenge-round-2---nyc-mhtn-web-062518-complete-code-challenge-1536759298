import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
const url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bots: [],
      enlisted: []
    }
  }

  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  handleClick = (bot) => {
    // console.log(event.target);
    this.setState({
      enlisted: [
        ...this.state.enlisted,
        bot
      ]
    })
  }

  render() {
    // console.log(this.state.enlisted);
    return (
      <div>
        <YourBotArmy enlistedBots={this.state.enlisted} handleClick={this.handleClick}  />
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
