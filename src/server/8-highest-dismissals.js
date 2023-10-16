function getHighestDismissals(data) {
  const highestDismissals = {};
  let maxDismissals = 0;

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

      if (highestDismissals[key] > maxDismissals) {
        maxDismissals = highestDismissals[key];
      }
    }
  }

  const mostDismissed = Object.keys(highestDismissals).filter(
    (key) => highestDismissals[key] === maxDismissals
  );

  return { mostDismissed, maxDismissals };
}


module.exports = getHighestDismissals;