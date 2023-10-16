const calculateMatchesPerYear = require('../src/server/1-matches-per-year');

const matchesData = [
  { season: '2015' },
  { season: '2015' },
  { season: '2016' },
  { season: '2016' },
  { season: '2017' },
];

test('Calculate the number of matches played per year', () => {
  const result = calculateMatchesPerYear(matchesData);

  expect(result['2015']).toBe(2);
  expect(result['2016']).toBe(2);
  expect(result['2017']).toBe(1);
});

