function calculateMatchesWonPerTeamPerYear(data) {
  const results = {};
  data.forEach((row) => {
    const season = row.season;
    const winner = row.winner;

    if (results[season]) {
      if (results[season][winner]) {
        results[season][winner] += 1;
      } else {
        results[season][winner] = 1;
      }
    } else {
      results[season] = { [winner]: 1 };
    }
  });
  return results;
}
module.exports = calculateMatchesWonPerTeamPerYear;
