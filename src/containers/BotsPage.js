import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from  './YourBotArmy'
const botURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props)
    this.state = {
      allBots: [],
      botArmy: []
    }
  }

  componentDidMount(){
    fetch(botURL)
    .then(r => r.json())
    .then(data => this.setState({allBots: data}, () => console.log('allbots state',this.state.allBots)))
  }

  handleClick = (props) => {
    console.log('this bot is ', props)
    this.setState({botArmy: [...this.state.botArmy, props]}, () => console.log('bot army state',this.state.botArmy))
  }

  render() {
    console.log('render',this.state.allBots)
    return (
      <div>
          <YourBotArmy botArmy={this.state.botArmy} />
          <BotCollection handleClick={this.handleClick} allBots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
