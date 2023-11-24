const fs = require('fs');
const csv = require('csv-parser');

const calculateMatchesPerYear = require('./src/server/1-matches-per-year');
const calculateMatchesWonPerTeamPerYear = require('./src/server/2-matches-won-per-team-per-year');
const calculateExtraRunsIn2016 = require('./src/server/3-extra-runs-in-2016');
const findTop10EconomicalBowlersIn2015 = require('./src/server/4-top-10-economical-bowlers-2015');
const getTossWinnerMatchWinner = require('./src/server/5-toss-winner-match-winner');
const getPlayerOfTheMatchBySeason = require('./src/server/6-player-Of-The-Match-By-Season');
const calculateStrikeRateByBatsman = require('./src/server/7-strike-rate-by-batsman');
const getHighestDismissals = require('./src/server/8-highest-dismissals');
const findBestEconomyInSuperOvers = require('./src/server/9-best-economy-in-super-overs');
const findPlayersInAllSeasons = require('./src/server/playersPlayedInAllSeasons');

const filePath_match = './src/data/matches.csv';
const filePath_delivery = './src/data/deliveries.csv';

const matchesData = [];
fs.createReadStream(filePath_match)
  .pipe(csv())
  .on('data', (row) => {
    matchesData.push(row);
  })
  .on('end', () => {
    const deliveriesData = [];
    fs.createReadStream(filePath_delivery )
      .pipe(csv())
      .on('data', (row) => {
        deliveriesData.push(row);
      })
      .on('end', () => {

        // const uniquePlayers = [...new Set(deliveriesData.map(row => row.batsman))];
        const result1 = calculateMatchesPerYear(matchesData);
        const result2 = calculateMatchesWonPerTeamPerYear(matchesData);
        const result3 = calculateExtraRunsIn2016(matchesData,deliveriesData);
        const result4 = findTop10EconomicalBowlersIn2015(matchesData, deliveriesData);
        const result5 = getTossWinnerMatchWinner(matchesData);
        const result6 = getPlayerOfTheMatchBySeason(matchesData);
        const batsman = "MS Dhoni";
        const result7 = calculateStrikeRateByBatsman(deliveriesData, matchesData, batsman);
        const result8 = getHighestDismissals(deliveriesData);
        const result9 = findBestEconomyInSuperOvers(deliveriesData);
        const result10 = findPlayersInAllSeasons(matchesData,deliveriesData);
        // console.log(result10);
        fs.writeFileSync('./src/public/output/matchesPerYear.json', JSON.stringify(result1, null, 2));
        fs.writeFileSync('./src/public/output/matchesWonPerTeamPerYear.json', JSON.stringify(result2, null, 2));
        fs.writeFileSync('./src/public/output/extraRunsIn2016.json', JSON.stringify(result3, null, 2));
        fs.writeFileSync('./src/public/output/top10EconomicalBowlers2015.json', JSON.stringify(result4, null, 2));
        fs.writeFileSync('./src/public/output/tossWinnerMatchWinner.json', JSON.stringify(result5, null, 2));
        fs.writeFileSync('./src/public/output/playerOfTheMatchBySeason.json', JSON.stringify(result6, null, 2));
        fs.writeFileSync('./src/public/output/strikeRateByBatsman.json', JSON.stringify(result7, null, 2));
        fs.writeFileSync('./src/public/output/highestDismissals.json', JSON.stringify(result8, null, 2));
        fs.writeFileSync('./src/public/output/bestEconomyInSuperOvers.json', JSON.stringify(result9, null, 2));


        console.log('Matches per year data has been generated and saved to public/output/matchesPerYear.json');
        console.log('Matches won per team per year data has been generated and saved to public/output/matchesWonPerTeamPerYear.json');
        console.log('Extra runs conceded per team in the year 2016 data has been generated and saved to public/output/extraRunsIn2016.json');
        console.log('Top 10 economical bowlers in the year 2015 data has been generated and saved to public/output/top10EconomicalBowlers2015.json');
        console.log('Number of times each team won the toss and also won the match data has been generated and saved to public/output/tossWinnerMatchWinner.json');
        console.log('Player with the highest number of Player of the Match awards for each season data has been generated and saved to public/output/playerOfTheMatchBySeason.json');
        console.log('Strike rate of a Batsman for each season data has been generated and saved to public/output/strikeRateByBatsman.json');
        console.log('Highest number of times one player has been dismissed by another player data has been generated and saved to public/output/highestDismissals.json');
        console.log('Bowler with the best economy in super overs data has been generated and saved to public/output/bestEconomyInSuperOvers.json');

      });
  });