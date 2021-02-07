const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getGames() {
  const response = await fetch(url);
  const data = await response.json();
  const results = data.all;

  for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}
getGames();
