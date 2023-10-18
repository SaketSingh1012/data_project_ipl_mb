/* eslint-disable no-undef */
const getHighestDismissals = require('../src/server/8-highest-dismissals');

const deliveriesData = [
  { player_dismissed: 'Player A', bowler: 'Bowler X' },
  { player_dismissed: 'Player B', bowler: 'Bowler Y' },
  { player_dismissed: 'Player A', bowler: 'Bowler Z' },
  { player_dismissed: 'Player A', bowler: 'Bowler X' },
  { player_dismissed: 'Player C', bowler: 'Bowler Z' },
  { player_dismissed: 'Player C', bowler: 'Bowler Z' },
];

test('Calculate highest Dismissals', () => {
  const result = getHighestDismissals(deliveriesData);
  expect(result).toEqual({
    mostDismissed: [
      'Player A dismissed by Bowler X',
      'Player C dismissed by Bowler Z',
    ],
    maxDismissals: 2,
  });
});
