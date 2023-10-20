# IPL Cricket Data Analysis

This project is a set of scripts for analyzing Indian Premier League (IPL) cricket data. The project uses Node.js and the `csv-parser` library to process data from two CSV files: `matches.csv` and `deliveries.csv`. It provides various insights and statistics related to IPL matches and players.

## Prerequisites

Before running the scripts, make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.

```bash
cd ipl-cricket-data-analysis

## Install the required Node.js packages using npm.
bash
npm install


### This script reads data from matches.csv and deliveries.csv, performs various analyses, and saves the results in JSON files in the public/output directory.

## List of Statistics Generated

- Matches per year
- Matches won per team per year
- Extra runs conceded per team in the year 2016
- Top 10 economical bowlers in the year 2015
- Number of times each team won the toss and also won the match
- Player with the highest number of Player of the Match awards for each season
- Strike rate of a batsman for each season
- Highest number of times one player has been dismissed by another player
- Bowler with the best economy in super overs

## Output Files

- `matchesPerYear.json`
- `matchesWonPerTeamPerYear.json`
- `extraRunsIn2016.json`
- `top10EconomicalBowlers2015.json`
- `tossWinnerMatchWinner.json`
- `playerOfTheMatchBySeason.json`
- `strikeRateByBatsman.json`
- `highestDismissals.json`
- `bestEconomyInSuperOvers.json`

