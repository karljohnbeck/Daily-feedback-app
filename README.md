# Project Name: Feedback Loop

## Description

_Duration: 1 weekend_

This project was to create an application that would allow a user to submit feedback on their school day experience. The application was build to be a single page app. when you start a feedback entry, a component would be rendered and after clicking the next button a new component would render in the originals place. the first 3 components require a radio button to be clicked. The forth component is optional. after the inputs are filled out there is a review page here you can edit your inputs as a final time by clicking a edit button next to the desired field. On clicking submit the input data is stored in a database and the user sees an alert notifying them their feedback was submitted successfully. The home page also displays all past feedback data for review 

## Screen Shot

_Below is an image of the home page._
![sample home page](/sample/sample_home.png)

_Below is an image one of the Input pages._

![sample input page](/sample/sample_input.png)

_Below is an image of the Review page._

![sample review page](/sample/sample_review.png)



## Usage

- To open the app:

1. Create a database using the command lines in the database.sql file (I used postico to talk with PostgreSQL).
2. Turn on the server with 'npm run server' in the terminal.
3. In a new terminal window, turn on the client with 'npm run client'.
4. Go to localhost:3000 in your browser.

- App use: 
1. Click the "Give Feedback" button
2. For the first 3 pages, select one of the radio buttons that best reflects your experience with 1 being poor and 5 being high. Once selected click the "Next" button.
3. Enter in any additional comments on the comment page, but this field is optional
4. Review your answers to the questions nad make any edits as needed.
5. Once everything looks good, click the "Submit" button to have your feedback saved.
6. you can click "Return home" to go back to the main page. 

## Built With

- JavaScript
- Bootstrap
- React
- CSS
- PostgreSQL
- Axios
- Pg
- Sweet alerts
- Redux



## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [karljohnbeck@gmail.com]