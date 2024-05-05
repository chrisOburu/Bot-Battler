import BotCard from "./BotCard";

function YourBotArmy({selectedBots, onBotDeselect,onDelete}) {

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
      <h2>Your Bot Army</h2>
        <div className="row bot-army-row">
          {selectedBots.map((selectedBot) => (
            <BotCard key={selectedBot.id} bot={selectedBot} onBotSelect={onBotDeselect} onDelete={onDelete} isYourArmy={true}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
