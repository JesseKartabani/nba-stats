import axios from "axios";

const leagueLeadersUrl =
  "https://stats.nba.com/stats/leagueleaders?ActiveFlag=&LeagueID=00&PerMode=Totals&Scope=S&Season=2020-21&SeasonType=Regular+Season&StatCategory=PTS";

// Gets 2020-2021 regular season top scorers
export const fetchLeagueLeaders = async () => {
  console.log("Fetching Stats");
  const response = await axios.get(`${leagueLeadersUrl}`);
  const leagueLeaders = response.data.resultSet.rowSet;

  return leagueLeaders;
};
