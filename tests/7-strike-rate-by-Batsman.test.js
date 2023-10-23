/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const calculateStrikeRateByBatsman = require('../src/server/7-strike-rate-by-batsman');

const matchesData = [
  { id: '1', season: '2008' },
  { id: '2', season: '2009' },
  { id: '3', season: '2010' },
];

const deliveriesData = [
  { match_id: '1', batsman: 'MS Dhoni', batsman_runs: '4', wide_runs: '0' },
  { match_id: '1', batsman: 'MS Dhoni', batsman_runs: '6', wide_runs: '0' },
  { match_id: '2', batsman: 'MS Dhoni', batsman_runs: '1', wide_runs: '0' },
  { match_id: '3', batsman: 'MS Dhoni', batsman_runs: '1', wide_runs: '0' },
];

test('Calculate strike rate for a particular player', () => {
  const playerName = 'MS Dhoni';
  const result = calculateStrikeRateByBatsman(deliveriesData, matchesData, playerName);
  const expectedData = {
    '2008': 500.00,
    '2009': 100.00,
    '2010': 100.00
  };
  expect(result).toEqual(expectedData);
});

