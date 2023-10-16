function calculateMatchesPerYear(data) {
  const matchesPerYear = {};
  data.forEach((row) => {
    const year = row.season;
    if (matchesPerYear[year]) {
      matchesPerYear[year]++;
    } else {
      matchesPerYear[year] = 1;
    }
  });
  return matchesPerYear;
}

module.exports = calculateMatchesPerYear;

