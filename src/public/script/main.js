function loadJSONData(filePath, callback) {
    fetch(filePath)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error('Error loading JSON:', error));
}

function func_1357(data, containerId, title) {
  Highcharts.chart(containerId, {
    chart: {
      type: 'column'
    },
    title: {
      text: title
    },
    xAxis: {
      categories: Object.keys(data),
      title: {
        text: 'Year'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Matches'
      }
    },
    series: [
      {
        name: 'Matches',
        data: Object.values(data)
      }
    ]
  });
}

  function func_2(data, containerId, title) {
    const years = Object.keys(data);
    const teams = [...new Set(Object.keys(data).reduce((arr, year) => arr.concat(Object.keys(data[year])), []))];

    const seriesData = teams.map(team => ({
      name: team,
      data: years.map(year => data[year][team] || 0)
    }));

    Highcharts.chart(containerId, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: years,
        title: {
          text: 'Year'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Matches Won'
        }
      },
      series: seriesData
    });
  }

function func_4(data, containerId, title) {

    const bowlers = data.map(item => item.bowler);
    const economyRates = data.map(item => parseFloat(item.economy));

    Highcharts.chart(containerId, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: bowlers,
        title: {
          text: 'Bowler'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Economy Rate'
        }
      },
      series: [
        {
          name: 'Economy Rate',
          data: economyRates
        }
      ]
    });
  }

  function func_6(data, containerId, title) {
    const years = Object.keys(data);
    const players = Object.values(data);
    const categories = [];

    for (let i = 0; i < years.length; i++) {
      categories.push(years[i] + ' - ' + players[i]);
    }

    Highcharts.chart(containerId, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: categories,
        title: {
          text: 'Year - Player Name'
        }
      },
      yAxis: {
        title: {
          text: 'Player of the Match'
        },
        labels: {
          enabled: false
        }
      },
      series: [
        {
          name: 'Player of the Match',
          data: years.map(() => 1)
        }
      ]
    });
  }

  function func_8(data, containerId, title) {
    const mostDismissed = data.mostDismissed;
    const maxDismissals = data.maxDismissals;

    Highcharts.chart(containerId, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: mostDismissed,
        title: {
          text: 'Batsman - Bowler'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Dismissals'
        }
      },
      series: [
        {
          name: 'Dismissals',
          data: mostDismissed.map(() => maxDismissals)
        }
      ],
      tooltip: {
        formatter: function () {
          return this.point.category + ': ' + maxDismissals + ' times';
        }
      }
    });
  }

  function func_9(data, containerId, title) {
    const bestBowler = data.bestBowler;
    const economy = data.economy;

    Highcharts.chart(containerId, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: [bestBowler],
        title: {
          text: 'Best Bowler'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Economy Rate'
        }
      },
      series: [
        {
          name: 'Economy Rate',
          data: [economy]
        }
      ]
    });
  }


loadJSONData('../output/matchesPerYear.json', function (data) {
    func_1357(data, 'matchesPerYear', 'Matches per Year');
});

loadJSONData('../output/matchesWonPerTeamPerYear.json', function (data) {
    func_2(data, 'matchesWonPerTeamPerYear', 'Matches Won Per Team Per Year');
});

loadJSONData('../output/extraRunsIn2016.json', function (data) {
    func_1357(data, 'extraRunsIn2016', 'Extra Runs In 2016');
});

loadJSONData('../output/top10EconomicalBowlers2015.json', function (data) {
    func_4(data, 'top10EconomicalBowlersIn2015', 'Top 10 Economical Bowlers In 2015');
});

loadJSONData('../output/tossWinnerMatchWinner.json', function (data) {
    func_1357(data, 'tossWinnerMatchWinner', 'Toss Winner Match Winner');
});

loadJSONData('../output/playerOfTheMatchBySeason.json', function (data) {
    func_6(data, 'playerOfTheMatchBySeason', 'Player Of The Match By Season');
  });

loadJSONData('../output/strikeRateByBatsman.json', function (data) {
    func_1357(data, 'strikeRateByBatsman', 'Strike Rate Of MS Dhoni');
});

loadJSONData('../output/highestDismissals.json', function (data) {
    func_8(data, 'highestDismissals', 'Highest Dismissals by Bowler');
  });

loadJSONData('../output/bestEconomyInSuperOvers.json', function (data) {
    func_9(data, 'bestEconomyInSuperOvers', 'Best Economy In Super Overs');
  });