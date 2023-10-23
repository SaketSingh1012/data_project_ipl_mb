function getPlayerOfTheMatchBySeason(data) {
  const playerBySeason = {};
  const highestPlayerBySeason = {};

  data.forEach((row) => {
    const season = row.season;
    const player = row.player_of_match;

    if (player) {
      if (playerBySeason[season]) {
        if (playerBySeason[season][player]) {
          playerBySeason[season][player]++;
        } else {
          playerBySeason[season][player] = 1;
        }
      } else {
        playerBySeason[season] = { [player]: 1 };
      }
    }
  });

  for (const season in playerBySeason) {
    const players = playerBySeason[season];
    const highestPlayer = Object.keys(players).reduce((a, b) => players[a] > players[b] ? a : b);
    highestPlayerBySeason[season] = highestPlayer;
  }

  const formattedResult = {};
  for (const season in highestPlayerBySeason) {
    const player = highestPlayerBySeason[season];
    formattedResult[season] = player;
  }
  return formattedResult;
}

module.exports = getPlayerOfTheMatchBySeason;
