import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {


    // console.log(props);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {props.bots.map(bot => {
            return <BotCard key={bot.id} bot={bot} handleClick={props.handleClick} />
          })}
    		</div>
  	  </div>
  	);


};

export default BotCollection;
