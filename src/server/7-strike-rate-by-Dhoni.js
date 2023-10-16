function calculateStrikeRateByDhoni(deliveriesData, matchesData) {
  const strikeRateBySeason = {};

  deliveriesData.forEach((delivery) => {
    const season = matchesData.find(match => match.id == delivery.match_id)?.season;
    const batsman = delivery.batsman;
    const runs = parseInt(delivery.batsman_runs);
    const extras = parseInt(delivery.extra_runs);
    const isWide = delivery.wide_runs > 0;

    if (batsman === 'MS Dhoni' && !isWide) {
      if (season) {
        if (!strikeRateBySeason[season]) {
          strikeRateBySeason[season] = {
            runs: 0,
            balls: 0,
          };
        }

        strikeRateBySeason[season].runs += runs;
        strikeRateBySeason[season].balls++;
      }
    }
  });

  const result = {};

  for (const season in strikeRateBySeason) {
    const seasonData = strikeRateBySeason[season];
    const strikeRate = ((seasonData.runs / seasonData.balls) * 100).toFixed(2);
    result[season] = parseFloat(strikeRate);
  }

  return result;
}

module.exports = calculateStrikeRateByDhoni;
