const fs = require('fs');
const csv = require('csv-parser');

function getHighestDismissals(data) {
  const highestDismissals = {};

  for (const delivery of data) {
    const dismissedPlayer = delivery.player_dismissed;
    const bowler = delivery.bowler;

    if (dismissedPlayer && bowler) {
      const key = `${dismissedPlayer} dismissed by ${bowler}`;
      if (highestDismissals[key]) {
        highestDismissals[key]++;
      } else {
        highestDismissals[key] = 1;
      }
    }
  }


  let maxDismissals = 0;
  let mostDismissed = '';

  for (const key in highestDismissals) {
    if (highestDismissals[key] > maxDismissals) {
      maxDismissals = highestDismissals[key];
      mostDismissed = key;
    }
  }

  return { mostDismissed, maxDismissals };
}

module.exports = getHighestDismissals;
