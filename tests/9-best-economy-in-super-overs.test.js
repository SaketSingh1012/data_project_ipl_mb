/* eslint-disable no-undef */
const findBestEconomyInSuperOvers = require('../src/server/9-best-economy-in-super-overs');

const deliveriesData = [

  { bowler: 'Bowler X', total_runs: '6', is_super_over: '1' },
  { bowler: 'Bowler Y', total_runs: '4', is_super_over: '1' },
  { bowler: 'Bowler X', total_runs: '3', is_super_over: '1' },
  { bowler: 'Bowler Z', total_runs: '5', is_super_over: '1' },
];

test('Find best economy in Super Overs', () => {
  const result = findBestEconomyInSuperOvers(deliveriesData);
 
  const expectedData = {
    'bestBowler' : 'Bowler Y',
    'economy': 24
  };
  expect(result).toEqual(expectedData);

});
