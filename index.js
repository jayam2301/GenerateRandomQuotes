const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  //   console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuote(apiUrl);
//for tweet
function tweet() {
  window.open("https://twitter.com/intent/tweet?text=Hello%20world");
}
