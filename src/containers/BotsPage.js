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
    // I need some sort of conditional rendering happening inside of this method that says if a bot card has been clicked on, then render it to
    // the army component and if so, then do not allow it to be added again.
    // I also need some other form of logic that will make the bot disappear from the army if it is clicked on after it has been enlisted
    // In order to accomplish this task, I am thinking of having an enlistedOrNot key in the state object that is set to false and then use conditional
    // rendering to make the bot disappear when clicked on 
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
