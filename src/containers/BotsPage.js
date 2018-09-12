import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

    constructor(props){
      super(props)

      this.state={
        bots: [],
        myBots: []
      }
    }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botData => this.setState({bots: botData}))
  }

  handleClick = (bot) => {
    console.log('hello')
    // this.setState({
    //   myBots: [...this.state.myBots, bot]
    // })
  }

  render() {
    // console.log(this.state.bots)
    return (
      <div>
          <YourBotArmy myBots={this.state.myBots} />
          <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
