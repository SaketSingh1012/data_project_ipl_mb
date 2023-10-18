/* eslint-disable no-undef */
const getTossWinnerMatchWinner = require('../src/server/5-toss-winner-match-winner');

test('get Toss Winner-Match Winner', () => {
  const sampleMatchesData = [
    {
      id: '1',
      toss_winner: 'Team A',
      winner: 'Team A',
    },
    {
      id: '2',
      toss_winner: 'Team A',
      winner: 'Team B',
    },
    {
      id: '3',
      toss_winner: 'Team B',
      winner: 'Team B',
    },
    {
      id: '4',
      toss_winner: 'Team A',
      winner: 'Team A',
    },

  ];

  const result = getTossWinnerMatchWinner(sampleMatchesData);

  expect(result['Team A']).toBe(2);


  expect(result['Team B']).toBe(1);

});
