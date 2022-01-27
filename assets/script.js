
var showJoke = document.getElementById("dadJoke");

function getApi() {
    fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com",
		"x-rapidapi-key": "bf92c9263fmsh9b5ba3341c5c1abp151886jsn998a30f334a8"
	}
})
  
    .then(function (response) {
        return response.json();
    
    })
    .then(function (data) {
        // Use the console to examine the response
        console.log(data);

    //     var listItem = document.createElement('h3');
    //     listItem.textContent = data;
    //     showJoke.appendChild(listItem);
    });
}
submitBtn.addEventListener('click', getApi);