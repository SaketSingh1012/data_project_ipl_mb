function getTossWinnerMatchWinner(matchesData) {
  const tossWinnerMatchWinnerCount = {};

  matchesData.forEach((match) => {
    const tossWinner = match.toss_winner;
    const matchWinner = match.winner;

    if (tossWinner === matchWinner) {
      if (tossWinner in tossWinnerMatchWinnerCount) {
        tossWinnerMatchWinnerCount[tossWinner]++;
      } else {
        tossWinnerMatchWinnerCount[tossWinner] = 1;
      }
    }
  });

  return tossWinnerMatchWinnerCount;
}

module.exports = getTossWinnerMatchWinner;
