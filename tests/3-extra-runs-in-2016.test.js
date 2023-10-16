const calculateExtraRunsIn2016 = require('../src/server/3-extra-runs-in-2016');

const deliveriesData = [
  { match_id: '577', bowling_team: 'CSK', extra_runs: '5' },
  { match_id: '579', bowling_team: 'MI', extra_runs: '10' },
  { match_id: '581', bowling_team: 'RCB', extra_runs: '7' },
  { match_id: '585', bowling_team: 'SRH', extra_runs: '3' },
  { match_id: '636', bowling_team: 'CSK', extra_runs: '8' },
];

test('Calculate Extra Runs In 2016', () => {
  const result = calculateExtraRunsIn2016(deliveriesData);

  expect(result['CSK']).toBe(13);
  expect(result['MI']).toBe(10);
  expect(result['RCB']).toBe(7);
  expect(result['SRH']).toBe(3);
});
