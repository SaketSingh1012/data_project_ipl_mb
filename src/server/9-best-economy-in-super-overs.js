function findBestEconomyInSuperOvers(deliveriesData) {
  const superOversData = deliveriesData.filter((delivery) => delivery.is_super_over === '1');
  const bowlerEconomy = {};

  superOversData.forEach((delivery) => {
    const bowler = delivery.bowler;
    const runs = parseInt(delivery.total_runs, 10);
    const legByeRuns = parseInt(delivery.legbye_runs, 10);
    const byeRuns = parseInt(delivery.bye_runs, 10);
    const penaltyRuns = parseInt(delivery.penalty_runs, 10);
    const wideRuns = parseInt(delivery.wide_runs, 10);
    const noballRuns = parseInt(delivery.noball_runs, 10);

    if(!bowlerEconomy[bowler]){
      bowlerEconomy[bowler] = { runs:0, balls: 0 };
    }
      bowlerEconomy[bowler].runs += runs - legByeRuns - byeRuns - penaltyRuns;
      if (!(wideRuns || noballRuns)) {
        bowlerEconomy[bowler].balls += 1;
      }
  });
  console.log(bowlerEconomy)

  for (const bowler in bowlerEconomy) {
    const runs = bowlerEconomy[bowler].runs;
    const balls = bowlerEconomy[bowler].balls;
    bowlerEconomy[bowler].economy = (runs / balls) * 6.0;
  }


  const bestBowler = Object.keys(bowlerEconomy).reduce((a, b) =>
    bowlerEconomy[a].economy < bowlerEconomy[b].economy ? a : b
  );

  return { bestBowler, economy: bowlerEconomy[bestBowler].economy };
}

module.exports = findBestEconomyInSuperOvers;
