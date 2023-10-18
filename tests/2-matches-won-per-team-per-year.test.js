/* eslint-disable no-undef */
const calculateMatchesWonPerTeamPerYear = require('../src/server/2-matches-won-per-team-per-year');

const matchesData = [
  { season: '2015', winner: 'CSK' },
  { season: '2015', winner: 'KKR' },
  { season: '2016', winner: 'SRH' },
  { season: '2016', winner: 'RCB' },
  { season: '2016', winner: 'SRH' },
  { season: '2017', winner: 'MI' },
];

test('Calculate the number of matches won per team per year', () => {
  const result = calculateMatchesWonPerTeamPerYear(matchesData);
  expect(result['2015']).toEqual({ CSK: 1, KKR: 1 });
  expect(result['2016']).toEqual({ SRH: 2, RCB: 1 });
  expect(result['2017']).toEqual({ MI: 1 });
});
