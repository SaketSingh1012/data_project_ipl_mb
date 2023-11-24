function findPlayersInAllSeasons(matchesdata, deliveriesdata) {
  const playerPresenceBySeason = {};

  matchesdata.forEach((match) => {
    const season = match.season;
    const playersInMatch = [];

    deliveriesdata.forEach((delivery) => {
      if (delivery.match_id === match.id) {
        playersInMatch.push(
          delivery.batsman,
          delivery.non_striker,
          delivery.bowler,
        );
      }
    });

    if (!playerPresenceBySeason[season]) {
      playerPresenceBySeason[season] = [...new Set(playersInMatch)];
    } else {
      playerPresenceBySeason[season] = Array.from(
        new Set([...playerPresenceBySeason[season], ...playersInMatch]),
      );
    }
  });
  const allSeasons = Object.keys(playerPresenceBySeason);
  const commonPlayers = allSeasons.reduce((common, season) => {
    return common.filter((player) =>
      playerPresenceBySeason[season].includes(player),
    );
  }, playerPresenceBySeason[allSeasons[0]] || []);

  return commonPlayers;
}

module.exports = findPlayersInAllSeasons;
