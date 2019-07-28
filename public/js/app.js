const pageRequest = new XMLHttpRequest();
pageRequest.addEventListener("load", redditReq);
pageRequest.open("GET", "https://www.reddit.com/r/mechanicalkeyboards.json");
pageRequest.send();

let contents = document.getElementById("contents");

function redditReq() {
  let obj = JSON.parse(this.responseText);
  console.log(obj.data.children);

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

let movieVar = document.querySelector("#movies");
console.log(movieVar);

movieVar.addEventListener("click", function() {
  const movies = new XMLHttpRequest();
  movies.addEventListener("load", redditReq);
  movies.open("GET", "https://www.reddit.com/r/movies.json");
  movies.send();
});
