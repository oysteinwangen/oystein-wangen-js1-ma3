const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url;

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(corsEnabledUrl);
    const data = await response.json();
    const games = data.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }

      console.log(games[i].name);
      resultsContainer.innerHTML += `<div class="result">
      <h2>${games[i].name}</h2>
      <h3>Rating: ${games[i].rating}</h3>
      <p>Number of tags: ${games[i].tags.length}</p>
      <div>`;
    }
  } catch {
    console.log("error");
    resultsContainer.innerHTML = `<h1>error</h1>`;
  }
}

getGames();
