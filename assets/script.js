
function getApi() {
    fetch("https://icanhazdadjoke.com/", {
	    headers: {
        Accept: "application/json",
	    }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        var listItem = JSON.stringify(data);
        listItem = document.getElementById("dadJoke").innerHTML = data.joke;
        console.log(listItem);
    })
}
newJoke.addEventListener('click', getApi);