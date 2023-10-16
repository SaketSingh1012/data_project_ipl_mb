const calculateStrikeRateByBatsman = require('../src/server/7-strike-rate-by-batsman');

const matchesData = [
  { id: '1', season: '2015' },
  { id: '2', season: '2016' },
  { id: '3', season: '2017' },
];

const deliveriesData = [
  { match_id: '1', batsman: 'Batsman A', batsman_runs: '4', wide_runs: '0' },
  { match_id: '1', batsman: 'Batsman A', batsman_runs: '6', wide_runs: '0' },
  { match_id: '1', batsman: 'Batsman B', batsman_runs: '0', wide_runs: '1' },
  { match_id: '1', batsman: 'Batsman B', batsman_runs: '1', wide_runs: '0' },
  { match_id: '1', batsman: 'Batsman A', batsman_runs: '4', wide_runs: '0' },
  { match_id: '1', batsman: 'Batsman A', batsman_runs: '3', wide_runs: '0' },
  { match_id: '1', batsman: 'Batsman B', batsman_runs: '0', wide_runs: '1' },
  { match_id: '2', batsman: 'Batsman A', batsman_runs: '4', wide_runs: '0' },
  { match_id: '2', batsman: 'Batsman B', batsman_runs: '6', wide_runs: '0' },
  { match_id: '2', batsman: 'Batsman A', batsman_runs: '0', wide_runs: '1' },
  { match_id: '2', batsman: 'Batsman B', batsman_runs: '0', wide_runs: '1' },
  { match_id: '2', batsman: 'Batsman B', batsman_runs: '2', wide_runs: '0' },
  { match_id: '3', batsman: 'Batsman A', batsman_runs: '1', wide_runs: '0' },
  { match_id: '3', batsman: 'Batsman B', batsman_runs: '0', wide_runs: '1' },
  { match_id: '3', batsman: 'Batsman B', batsman_runs: '0', wide_runs: '0' },
  { match_id: '3', batsman: 'Batsman B', batsman_runs: '4', wide_runs: '0' },
  { match_id: '3', batsman: 'Batsman A', batsman_runs: '6', wide_runs: '0' },

];

const players = ['Batsman A', 'Batsman B'];

test('Calculate strike rate by batsman', () => {
  const result = calculateStrikeRateByBatsman(deliveriesData, matchesData, players);
  console.log(result);
  expect(result).toMatchObject({
    '2015': {
      'Batsman A': '425.00',
      'Batsman B': '100.00',
    },
    '2016': {
      'Batsman A': '400.00',
      'Batsman B': '400.00',
    },
    '2017': {
      'Batsman A': '350.00',
      'Batsman B': '200.00',
    },
  });
});
