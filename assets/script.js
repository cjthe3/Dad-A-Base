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

// function getChuckApi() {
//     fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
//         headers: {
//             accept: 'application/json',
//             'X-RapidAPI-Key': 'bf92c9263fmsh9b5ba3341c5c1abp151886jsn998a30f334a8',
//             'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
//         }
//     })
    
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);

//             var listItem = JSON.stringify(data);
//             listItem = document.getElementById("dadJoke").innerHTML = data.value;
//             console.log(listItem);
//         })
//     }

newJoke.addEventListener("click", getApi);
// chuckJoke.addEventListener("click", getChuckApi);
var favoriteBtn = document.getElementById("favejoke");
favoriteBtn.addEventListener("click", saveFavorite);

function saveFavorite() {
    //getting text content from current joke
    var currentJokeElement = document.getElementById("dadJoke");
    var currentJokeText = currentJokeElement.textContent;
    //reading previous saved jokes
    var stringifiedArray = localStorage.getItem("savedJokes");
    //treat null as empty array
    if (stringifiedArray === null) {
        stringifiedArray = "[]";
    }
    //changing from string to array
    var parsedArray = JSON.parse(stringifiedArray);
    //appending current joke to favorite list
    parsedArray.push(currentJokeText);
    //changing from array to string
    stringifiedArray = JSON.stringify(parsedArray);
    //saved to local storage
    localStorage.setItem("savedJokes", stringifiedArray);

    var jokeListElement = document.getElementById("favoritedJokes");
    //added to webpage list
    var listItem = document.createElement('li');
    listItem.textContent = currentJokeText;
    jokeListElement.appendChild(listItem);
}

function initializeFavorites() {
    var jokeListElement = document.getElementById("favoritedJokes");
    var stringifiedArray = localStorage.getItem("savedJokes");
    //treat null as empty array
    if (stringifiedArray === null) {
        stringifiedArray = "[]";
    }
    //changing from string to array
    var parsedArray = JSON.parse(stringifiedArray);

    for (var i = 0; i < parsedArray.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = parsedArray[i];
        jokeListElement.appendChild(listItem);
    }
}
initializeFavorites();

