const pageRequest = new XMLHttpRequest();
pageRequest.addEventListener("load", redditReq);
pageRequest.open("GET", "https://www.reddit.com/r/mechanicalkeyboards.json");
pageRequest.send();

let contents = document.getElementById("contents");

function redditReq() {
  let obj = JSON.parse(this.responseText);

  contents.innerHTML = ""; // clears previous contents

  for (let i = 0; i < obj.data.children.length; i++) {
    let postDiv = document.createElement("div");
    postDiv.className = "postDiv";
    contents.appendChild(postDiv);

    if (obj.data.children[i].data.preview) {
      let postPic = document.createElement("img");
      postPic.className = "postPic";
      postPic.src = obj.data.children[
        i
      ].data.preview.images[0].source.url.replace(/&amp;/g, "&");
      postDiv.appendChild(postPic);
    }

    let postTitle = document.createElement("h2");
    postTitle.className = "title";
    postTitle.innerHTML = obj.data.children[i].data.title;
    postDiv.appendChild(postTitle);

    let postTime = document.createElement("p");
    postTime.className = "postTime";
    postTime.innerHTML =
      "Posted by " +
      obj.data.children[i].data.author +
      " " +
      moment.unix(obj.data.children[i].data.created).fromNow();
    postDiv.appendChild(postTime);

    let postText = document.createElement("p");
    postText.className = "postText";
    postText.innerHTML = obj.data.children[i].data.selftext;
    postDiv.appendChild(postText);
  }
}

let subArr = [
  "https://www.reddit.com/r/javascript/.json",
  "https://www.reddit.com/r/weightlifting.json",
  "https://www.reddit.com/r/PeopleFuckingDying.json",
  "https://www.reddit.com/r/pics.json",
  "https://www.reddit.com/r/memes.json",
  "https://www.reddit.com/r/MurderedByWords.json",
  "https://www.reddit.com/r/gifs.json"
];

let subArrNames = [
  "JAVASCRIPT",
  "WEIGHTLIFTING",
  "PEOPLEFUCKINGDYING",
  "PICS",
  "MEMES",
  "MURDEREDBYWORDS",
  "GIFS"
];

document.querySelectorAll(".subs")[0].addEventListener("click", function() {
  const randomSub = new XMLHttpRequest();
  let randomNum = Math.floor(Math.random() * 7);
  document.querySelectorAll(".subs")[0].innerHTML = subArrNames[randomNum];
  randomSub.addEventListener("load", redditReq);
  randomSub.open("GET", subArr[randomNum]);
  randomSub.send();
});

document.querySelectorAll(".subs")[2].addEventListener("click", function() {
  const movies = new XMLHttpRequest();
  movies.addEventListener("load", redditReq);
  movies.open("GET", "https://www.reddit.com/r/movies.json");
  movies.send();
});

document.querySelectorAll(".subs")[4].addEventListener("click", function() {
  const mechkeys = new XMLHttpRequest();
  mechkeys.addEventListener("load", redditReq);
  mechkeys.open("GET", "https://www.reddit.com/r/mechanicalkeyboards.json");
  mechkeys.send();
});

document.querySelectorAll(".subs")[6].addEventListener("click", function() {
  const market = new XMLHttpRequest();
  market.addEventListener("load", redditReq);
  market.open("GET", "https://www.reddit.com/r/mechmarket.json");
  market.send();
});

document.querySelector(".ig").addEventListener("click", function() {
  window.location = "https://www.instagram.com/andrewobiano/";
});
