import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  const handleBotSelect = (bot) => {
    if (!selectedBots.some((selectedBot) => selectedBot.id === bot.id)) { // does not add bot when already exist in the selectedBots array
      setSelectedBots([...selectedBots, bot]);
    }
  };

  const handleBotDeselect = (bot) => {
    setSelectedBots(selectedBots.filter((selectedBot) => selectedBot.id !== bot.id));
  };

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(data => {
        setBots(data);
        console.log("fetched")
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },[]); // Empty dependency array ensures the effect runs only once

  const handleDelete = (id) => {
    // Call backend API to delete the bot
    fetch(`http://localhost:8002/bots/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // If deletion is successful, trigger the onDelete callback
          setSelectedBots(selectedBots.filter((selectedBot) => selectedBot.id !== id));
          setBots(bots.filter((bot) => bot.id !== id));
        } else {
          // Handle error if deletion fails
          console.error("Failed to delete bot");
        }
      })
      .catch((error) => {
        console.error("Error deleting bot:", error);
      });
  };

  return (
    <div>
      <YourBotArmy selectedBots = {selectedBots} onBotDeselect ={handleBotDeselect} onDelete ={handleDelete}/>
      <BotCollection bots={bots} onBotSelect={handleBotSelect} onDelete ={handleDelete}/>
    </div>
  );
}

export default BotsPage;
