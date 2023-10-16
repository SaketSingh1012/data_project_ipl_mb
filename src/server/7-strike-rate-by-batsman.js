function calculateStrikeRateByBatsman(deliveriesData, matchesData, players) {
  const strikeRateByPlayerAndSeason = {};

  deliveriesData.forEach((row) => {
    const season = matchesData[row.match_id]?.season;
    const batsman = row.batsman;
    const batsmanRuns = parseInt(row.batsman_runs);
    const isWide = row.wide_runs > 0;
    const ballsFaced = isWide ? 0 : 1;

    if (!strikeRateByPlayerAndSeason[season]) {
      strikeRateByPlayerAndSeason[season] = {};
    }

    if (!strikeRateByPlayerAndSeason[season][batsman]) {
      strikeRateByPlayerAndSeason[season][batsman] = { runs: 0, ballsFaced: 0 };
    }

    strikeRateByPlayerAndSeason[season][batsman].runs += batsmanRuns;
    strikeRateByPlayerAndSeason[season][batsman].ballsFaced += ballsFaced;
  });

  const formattedResult = {};

  for (const season in strikeRateByPlayerAndSeason) {
    formattedResult[season] = {};

    for (const player of players) {
      if (strikeRateByPlayerAndSeason[season][player]) {
        const runs = strikeRateByPlayerAndSeason[season][player].runs;
        const ballsFaced = strikeRateByPlayerAndSeason[season][player].ballsFaced;
        const strikeRate = (runs / ballsFaced) * 100;

        formattedResult[season][player] = strikeRate.toFixed(2);
      }
    }
  }

  return formattedResult;
}

module.exports = calculateStrikeRateByBatsman;
