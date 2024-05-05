import BotCard from "./BotCard";

function BotCollection({bots,onBotSelect,onDelete}) {
  
  return (
    <div className="ui four column grid">
      <h2> Collection of all bots</h2>
      <div className="row">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onBotSelect={onBotSelect} onDelete={onDelete} isYourArmy={false}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
