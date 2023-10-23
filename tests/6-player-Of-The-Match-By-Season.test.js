/* eslint-disable no-undef */
const getPlayerOfTheMatchBySeason = require('../src/server/6-player-Of-The-Match-By-Season');

test('get Player of the match by season', () => {
  const sampleMatchesData = [
    {
      season: '2015',
      player_of_match: 'Player A',
    },
    {
      season: '2015',
      player_of_match: 'PLayer B'
    },
    {
      season: '2015',
      player_of_match: 'Player B',
    },
    {
      season: '2015',
      player_of_match: 'Player A',
    },
    {
      season: '2016',
      player_of_match: 'Player A',
    },
    {
      season: '2016',
      player_of_match: 'Player C',
    },
    {
      season:'2016',
      player_of_match: 'Player C'
    },
    {
      season:'2017',
      player_of_match: 'Player C'
    },
  ];

  const result = getPlayerOfTheMatchBySeason(sampleMatchesData);
  console.log(result);

  expect(result).toEqual({
    '2015': 'Player A',
    '2016': 'Player C',
    '2017': 'Player C',
  });
});
