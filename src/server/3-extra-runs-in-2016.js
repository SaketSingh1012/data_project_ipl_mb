const calculateExtraRunsIn2016 = (matchesData, deliveriesData) => {
  const extraRuns = {};
  const years2016 = matchesData
    .filter((row) => row.season === '2016')
    .map((row) => parseInt(row.id, 10));
  deliveriesData.forEach((row) => {
    const matchId = parseInt(row.match_id, 10);

    if (years2016.includes(matchId)) {
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
};

module.exports = calculateExtraRunsIn2016;
