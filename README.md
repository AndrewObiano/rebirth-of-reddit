To view, make sure to run ["live-server"](https://www.npmjs.com/package/live-server) in the `/public` directory.

# Rebirth of Reddit

Super Awesome Co. has just been asked to concept a new Reddit theme. This is super last minute but we need to come up with a few concepts to propose to them by tomorrow. This could be huge for us and really put our shop on the map. We have to drop everything at once to hit this deadline.

## Game Plan

Our game plan is to use their subreddit API to create a Reddit clone with our own theme (See the layouts in the layouts directory). I know we don't have a lot of time but we also need to demonstrate that we are up to par with our stack and code quality. We can get the JSON feed of any sub-reddit by changing adding a `.json` extension to the URL.

`Ex. http://www.reddit.com/r/javascript -> http://www.reddit.com/r/javascript.json`

### Objectives

Use the sub-reddit API to achieve the following:

1. Look at the data the API gives us and whiteboard our concept for our proposed design.
1. Create a simple client side application and set it up with our current workflow and create the new repo on GitHub.
  * Gulp
  * Sass
  * anything else...
1. Use the layouts defined in the Layouts directory
  - the image should fill the entire area of the rectangular box (use background-size "cover").
  - Optional Hard Mode: *Even though the image is displayed as a background image, create your markup so that each image is also included in an <img> tag so it is visible to the DOM*
  - the title should never span more than 2 lines tall.
  - the subtitle line should never span more than 2 lines tall.
  - the text snippet should never span more than 4 lines tall, except for the small size, where it should be the height of the text.
  - Google fonts used in the layout:
    - Oswald Regular
    - Lato Regular
  - Be sure you are viewing the layouts at Actual Size. Use media query ranges as they make sense for the layout. The only 'media query' requirement is that the final webapp matches the mockups at the sizes specified, and that they gracefully transition at each range.
1. When the page loads we need to have the application go out to the API endpoint of your choosing to pull in the current feed via AJAX.
  - Interaction, Loading Data
    - when "My Boards" is clicked
      - create an xhr get request to `http://www.reddit.com/r/MY_FAVORITE_SUBBREDDIT.json`
    - when "Random" is clicked
      - create an xhr get request to a random subreddit. See notes below.
    - when "Get the app" is clicked
      - create an xhr get request to `http://www.reddit.com/r/ANOTHER_SUBBREDDIT.json`
  - Random subreddit
    - Create an array of 7 different subreddits
    - Store this array of subreddits within your application, in a location that's highly visible (Scope-wise).
    - On clicking the "Random" link, randomly choose one of the 7 subreddits from your array and create an xhr get request for that subreddit. Then display the data from that request, in your feed list.
    - DO NOT USE the random api that already exists in Reddit's API. This will not work with XHR.
1. Dynamically create our feed list with our proposed style from the data received from the API.
1. Again, we have to have a good code demo as well so please use appropriate best practices when building out the app.
1. Set up your project as a GitHub page so that we can demo your work.


### Bonus

I think it would really knock their socks off if we could have our clone have some behavior that Reddit doesn't currently have, like maybe a Twitter type of feed that updates with the latest posts or something. We'll call it Twittet or maybe Redditter...I don't know. That's what I'm paying you for!

You could add features like:
  - Infinite scrolling
  - Reddit search engine - get data from any subreddit

Oh and.....THAAAAANNKKKS :D
