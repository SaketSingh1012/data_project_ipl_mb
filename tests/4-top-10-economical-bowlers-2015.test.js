/* eslint-disable no-undef */
const findTop10EconomicalBowlersIn2015 = require('../src/server/4-top-10-economical-bowlers-2015');

const matchesData = [
  { id: '1', season: '2015' },
  { id: '2', season: '2015' },
  { id: '3', season: '2015' },
  { id: '4', season: '2016' },
];

const deliveriesData = [
  { match_id: '1', bowler: 'Bowler1', wide_runs: '1', noball_runs: '0', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '1', bowler: 'Bowler2', wide_runs: '0', noball_runs: '0', total_runs: '4' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '1', bowler: 'Bowler1', wide_runs: '0', noball_runs: '0', total_runs: '6' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '1', bowler: 'Bowler3', wide_runs: '0', noball_runs: '1', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '1', bowler: 'Bowler1', wide_runs: '0', noball_runs: '0', total_runs: '3' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '1', bowler: 'Bowler3', wide_runs: '1', noball_runs: '0', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '2', bowler: 'Bowler4', wide_runs: '0', noball_runs: '0', total_runs: '2' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '2', bowler: 'Bowler5', wide_runs: '1', noball_runs: '0', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '2', bowler: 'Bowler4', wide_runs: '0', noball_runs: '0', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '2', bowler: 'Bowler5', wide_runs: '0', noball_runs: '0', total_runs: '0' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '2', bowler: 'Bowler11',wide_runs: '0', noball_runs: '0', total_runs: '0' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '2', bowler: 'Bowler11',wide_runs: '0', noball_runs: '0', total_runs: '6' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler8', wide_runs: '0', noball_runs: '0', total_runs: '4' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler9', wide_runs: '0', noball_runs: '0', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler8', wide_runs: '0', noball_runs: '0', total_runs: '3' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler9', wide_runs: '0', noball_runs: '0', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler8', wide_runs: '0', noball_runs: '1', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler10',wide_runs: '0', noball_runs: '0', total_runs: '2' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler6', wide_runs: '0', noball_runs: '0', total_runs: '0' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler6', wide_runs: '0', noball_runs: '0', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler7', wide_runs: '1', noball_runs: '0', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '3', bowler: 'Bowler7', wide_runs: '0', noball_runs: '0', total_runs: '4' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
  { match_id: '4', bowler: 'Bowler12', wide_runs: '0', noball_runs: '0', total_runs: '1' , bye_runs : '0' , legbye_runs: '0' , penalty_runs : '0'},
];

test('Find the Top 10 Economical Bowlers in 2015', () => {
  const result = findTop10EconomicalBowlersIn2015(matchesData, deliveriesData);

  expect(deliveriesData.length).toBeGreaterThan(10);

  expect(result).toHaveLength(10);

  const expectedData = [
    { bowler: 'Bowler6', economy: '3.00' },
    { bowler: 'Bowler5', economy: '6.00' },
    { bowler: 'Bowler9', economy: '6.00' },
    { bowler: 'Bowler4', economy: '9.00' },
    { bowler: 'Bowler10', economy: '12.00' },
    { bowler: 'Bowler11', economy: '18.00' },
    { bowler: 'Bowler2', economy: '24.00' },
    { bowler: 'Bowler8', economy: '24.00' },
    { bowler: 'Bowler1', economy: '30.00' },
    { bowler: 'Bowler7', economy: '30.00' }
  ]

  expect(result).toEqual(expectedData);
});
