const jokes = document.querySelector(".joke p");
const apiUrl =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single";
const btn = document.querySelector(".btn button");

async function jokeData() {
  await fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      jokes.innerHTML = data.joke;
    }).catch((err) => {
        console.log(err);
    })
}

btn.addEventListener("click", () => {
  jokeData();
});
