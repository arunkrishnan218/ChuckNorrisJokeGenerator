let getjokes = document.querySelector("#get-jokes");

getjokes.addEventListener("click", getJokes);

function getJokes(e) {
  let numberInput = document.getElementById("number").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `	http://api.icndb.com/jokes/random/${numberInput}`, true);

  xhr.onload = function () {
    let jokeOuput = document.getElementById("jokes");
    if (this.status === 200) {
      let response = JSON.parse(this.responseText);
      let output = "";

      if (response.type == "success") {
        response.value.forEach((joke) => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "Something Went Wrong With The Api";
      }

      jokeOuput.innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
