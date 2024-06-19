APIKey = 'f0FoiFLgh1c5kjMxLsf3iyptaBR9srZ4tWJAQYgxhWBRqjghBg0Ce7vy';

function isDivisibleByTwo(number) {
    if(number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let searchForm = document.getElementById("search-form");
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ``;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            let searchResults;
            for(let i = 0; i < res.photos.length; i++) {
                let imageDiv = document.createElement("div");
                imageDiv.innerHTML = `<a href="${res.photos[i].url}" target="_blank">
                    <img src="${res.photos[i].src.original}" class="result-img">
                    <p class="img-description">${res.photos[i].photographer}</p>
                    </a>
                `;
                imageDiv.classList.add("image-div");
                resultsDiv.appendChild(imageDiv);
            }
        }
    };
    let textValue = document.getElementById("search-bar").value;
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}&per_page=12`, true);
    xhttp.setRequestHeader('Authorization', APIKey);
    xhttp.send();
})