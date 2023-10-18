function getPlayerOfTheMatchBySeason(data) {
  const playerOfTheMatchBySeason = {};
  const highestPlayerOfTheMatchBySeason = {};

  data.forEach((row) => {
    const season = row.season;
    const playerOfTheMatch = row.player_of_match;

    if (playerOfTheMatch) {
      if (playerOfTheMatchBySeason[season]) {
        if (playerOfTheMatchBySeason[season][playerOfTheMatch]) {
          playerOfTheMatchBySeason[season][playerOfTheMatch]++;
        } else {
          playerOfTheMatchBySeason[season][playerOfTheMatch] = 1;
        }
      } else {
        playerOfTheMatchBySeason[season] = { [playerOfTheMatch]: 1 };
      }
    }
  });

  for (const season in playerOfTheMatchBySeason) {
    const players = playerOfTheMatchBySeason[season];
    const highestPlayer = Object.keys(players).reduce((a, b) => players[a] > players[b] ? a : b);
    highestPlayerOfTheMatchBySeason[season] = highestPlayer;
  }

  const formattedResult = {};
  for (const season in highestPlayerOfTheMatchBySeason) {
    const player = highestPlayerOfTheMatchBySeason[season];
    formattedResult[season] = player;
  }
  return formattedResult;
}

module.exports = getPlayerOfTheMatchBySeason;
