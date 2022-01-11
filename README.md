# Top Weather Stories

**Overview**
A web scraper that finds the top 4 stories from weather.com

**How to use**
- To pull the info, call `articles`
    - By default it is logged to the terminal
    - Can also call it to anything else
        - A database
        - Another function
        - Plug it into a front-end
        - Add to another Node file
- You can change the website you're scrapping data from simply by changing the `url` variable
- Can change the content of the page you're looking for by changing the `htmlElement` variable
    - Takes a class or id name
        - Class -> add a "." in front
        - ID -> add a "#" in front
    - You would need to find that by using the browser dev tools
    - May need to refactor the `title` variable depending on how the site formats it's tags
    - If the element you're targeting is linking to another site, remove the `url` variable that's concatenated in the `link` variable