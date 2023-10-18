function findBestEconomyInSuperOvers(deliveriesData) {
  const superOversData = deliveriesData.filter((delivery) => delivery.is_super_over === '1');
  const bowlerEconomy = {};

  superOversData.forEach((delivery) => {
    const bowler = delivery.bowler;
    const runs = parseInt(delivery.total_runs, 10);

    if (bowler in bowlerEconomy) {
      bowlerEconomy[bowler].runs += runs;
      bowlerEconomy[bowler].balls += 1;
    } else {
      bowlerEconomy[bowler] = { runs, balls: 1 };
    }
  });

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
