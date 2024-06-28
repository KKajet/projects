const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  fetch("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.joke);
      joke.innerHTML = data.joke;
    })
    .catch((error) => {
      console.log(error);
    });
});
