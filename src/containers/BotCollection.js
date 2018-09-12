import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }

  }

//this does nothing right now. My idea was to load a spec card component when clicked is true but ran out of time
  specLoader = () => {
    this.setState({clicked: !this.state.clicked})
  }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          Collection of all bots
          {this.props.robots.map( robot => {
            return <BotCard
              key={robot.id}
              robot={robot}
              handleClick={this.state.clicked ? this.specLoader : this.props.handleClick} /> }
          )}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
