const findTop10EconomicalBowlersIn2015 = require('../src/server/4-top-10-economical-bowlers-2015');

const matchesData = [
  { id: '1', season: '2015' },
  { id: '2', season: '2015' },
  { id: '3', season: '2015' },
];

const deliveriesData = [
  { match_id: '1', bowler: 'Bowler1', wide_runs: '1', noball_runs: '0', total_runs: '10' },
  { match_id: '1', bowler: 'Bowler2', wide_runs: '0', noball_runs: '0', total_runs: '15' },
  { match_id: '1', bowler: 'Bowler1', wide_runs: '0', noball_runs: '0', total_runs: '8' },
  { match_id: '1', bowler: 'Bowler3', wide_runs: '2', noball_runs: '1', total_runs: '20' },
  { match_id: '1', bowler: 'Bowler1', wide_runs: '0', noball_runs: '0', total_runs: '12' },
  { match_id: '1', bowler: 'Bowler3', wide_runs: '1', noball_runs: '0', total_runs: '18' },
  { match_id: '2', bowler: 'Bowler4', wide_runs: '0', noball_runs: '0', total_runs: '14' },
  { match_id: '2', bowler: 'Bowler5', wide_runs: '1', noball_runs: '0', total_runs: '16' },
  { match_id: '2', bowler: 'Bowler4', wide_runs: '0', noball_runs: '0', total_runs: '11' },
  { match_id: '2', bowler: 'Bowler5', wide_runs: '0', noball_runs: '0', total_runs: '13' },
  { match_id: '2', bowler: 'Bowler11',wide_runs: '0', noball_runs: '0', total_runs: '9' },
  { match_id: '2', bowler: 'Bowler11',wide_runs: '0', noball_runs: '0', total_runs: '12' },
  { match_id: '3', bowler: 'Bowler8', wide_runs: '0', noball_runs: '0', total_runs: '10' },
  { match_id: '3', bowler: 'Bowler9', wide_runs: '0', noball_runs: '0', total_runs: '14' },
  { match_id: '3', bowler: 'Bowler8', wide_runs: '0', noball_runs: '0', total_runs: '10' },
  { match_id: '3', bowler: 'Bowler9', wide_runs: '0', noball_runs: '0', total_runs: '14' },
  { match_id: '3', bowler: 'Bowler8', wide_runs: '0', noball_runs: '0', total_runs: '10' },
  { match_id: '3', bowler: 'Bowler10',wide_runs: '0', noball_runs: '0', total_runs: '14' },
  { match_id: '3', bowler: 'Bowler6', wide_runs: '0', noball_runs: '0', total_runs: '10' },
  { match_id: '3', bowler: 'Bowler6', wide_runs: '0', noball_runs: '0', total_runs: '14' },
  { match_id: '3', bowler: 'Bowler7', wide_runs: '0', noball_runs: '0', total_runs: '10' },
  { match_id: '3', bowler: 'Bowler7', wide_runs: '0', noball_runs: '0', total_runs: '14' },
];

test('Find the Top 10 Economical Bowlers in 2015', () => {
  const result = findTop10EconomicalBowlersIn2015(matchesData, deliveriesData);

  expect(deliveriesData.length).toBeGreaterThan(10);

  expect(result).toHaveLength(10);

  const expectedData = [
    { bowler: 'Bowler8', economy: '60.00' },
    { bowler: 'Bowler11', economy: '63.00' },
    { bowler: 'Bowler6', economy: '72.00' },
    { bowler: 'Bowler7', economy: '72.00' },
    { bowler: 'Bowler4', economy: '75.00' },
    { bowler: 'Bowler9', economy: '84.00' },
    { bowler: 'Bowler10', economy: '84.00' },
    { bowler: 'Bowler1', economy: '90.00' },
    { bowler: 'Bowler2', economy: '90.00' },
    { bowler: 'Bowler5', economy: '174.00' },
  ];

  expect(result).toEqual(expectedData);
});
