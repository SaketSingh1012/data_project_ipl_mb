function findTop10EconomicalBowlersIn2015(matchesData, deliveriesData) {
  const matches2015 = matchesData.filter((row) => row.season === '2015');

  const bowlerData = {};
  deliveriesData.forEach((row) => {
    const matchId = row.match_id;
    const bowler = row.bowler;
    const wideRuns = parseInt(row.wide_runs, 10);
    const legByeRuns = parseInt(row.legbye_runs, 10);
    const byeRuns = parseInt(row.bye_runs, 10);
    const noballRuns = parseInt(row.noball_runs, 10);
    const penaltyRuns = parseInt(row.penalty_runs, 10);
    const totalConcededRuns = parseInt(row.total_runs, 10);

    const match = matches2015.find((m) => m.id === matchId);

    if (match) {
      if (!bowlerData[bowler]) {
        bowlerData[bowler] = {
          totalRuns: 0,
          totalBalls: 0,
        };
      }

      bowlerData[bowler].totalRuns += totalConcededRuns - legByeRuns - byeRuns - penaltyRuns;
      if (!(wideRuns || noballRuns)) {
        bowlerData[bowler].totalBalls++;
      }
    }
  });

  const bowlers = Object.keys(bowlerData);

  const economicalBowlers = [];

  for (const bowler of bowlers) {
    const runs = bowlerData[bowler].totalRuns;
    const balls = bowlerData[bowler].totalBalls;

    if (balls > 0) {
      const economy = ((runs / balls) * 6).toFixed(2);
      economicalBowlers.push({
        bowler,
        economy,
      });
    }
  }

  economicalBowlers.sort((a, b) => a.economy - b.economy);

  return economicalBowlers.slice(0, 10);
}

module.exports = findTop10EconomicalBowlersIn2015;
