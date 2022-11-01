# qa-assessment

The Super Secure Bank is not working very well.
We need to add some tests in order to understand what is not working.

# setup
- fork the project
- run 'nvm use'
- run 'npm install'
- run 'npm test' 

Feel free to add any other module that you feel it could be needed.

You can find the frontend here: https://github.com/nicolo-riboni-sp/qa-app-ui
And the backend here: https://github.com/nicolo-riboni-sp/qa-app-api

When ready submit a Pull Request.

# Personal notes

## The process
1. I spent the first 15-20 minutes reading the two codebases. By looking at the code and by running the frontend project, I started to see some of the problems.
2. I decided to begin with the backend because it also powers the frontend. I started with something easy like the endpoint to retrieve all the users. Then I moved to the endpoint to update the balance. I knew that it was a problematic endpoint so I wanted to underline some of these problems. I spent around 40-45 minutes on this.
3. When I moved to the frontend I had to familiarize myself with both Vue and Puppeeter. I decided to keep working on the functionality for the balance update. I tested something simpler by leveraging the provided example. I then decided to test something related to the transactions because I hadn't the time to work on it for the backend and I knew that something could have been broken there. Around 40 minutes were spent on this.
4. Now I'm spending the rest of my time writing this doc

## What if I had more time?
1. I would have been more systematic. Testing by domain, so focus first on the users and then on the transactions. 
2. I would have tested every endpoint
3. I would have tested in a better way the error handling that seemed to be very poorly managed
4. I would have tested edge cases
5. I would have tested different browsers and different window sizes

## What I enjoyed
The code was very well written and the examples were perfect to help me start on the right foot. In addition, I consider myself a curious person so I enjoyed a lot seeing technologies that I'm not familiar with like Vue or Sequilize. 
