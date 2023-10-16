function calculateExtraRunsIn2016(data) {
  const extraRuns = {}; 
  data.forEach((row) => {
    if (row.match_id >= 577 && row.match_id <= 636) { 
      const bowlingTeam = row.bowling_team;
      const extraRunsForMatch = parseInt(row.extra_runs);

      if (extraRuns[bowlingTeam]) {
        extraRuns[bowlingTeam] += extraRunsForMatch;
      } else {
        extraRuns[bowlingTeam] = extraRunsForMatch;
      }
    }
  });
  return extraRuns;
}
module.exports = calculateExtraRunsIn2016;
