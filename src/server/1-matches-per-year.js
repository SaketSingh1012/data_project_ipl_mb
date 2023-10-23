function calculateMatchesPerYear(matches) {
  const matchesPerYear = {};
  matches.forEach((match) => {
    const year = match.season;
    if (matchesPerYear[year]) {
      matchesPerYear[year]++;
    } else {
      matchesPerYear[year] = 1;
    }
  });
  return matchesPerYear;
}

module.exports = calculateMatchesPerYear;

