# Search for Git repos  

### A application to give users an option to bookmark and comment on their favorite and most useful Github repositories.  

### Utilized github’s public rest api (https://docs.github.com/en/free-pro-team@latest/rest/reference) ->  
Implemented.  

### A user enters the system (no authentication required) on a frontent application, searches for an organization, and sees its public repositories ->  
Implemented.  
  
### The frontend application communicate with a backend service which in turn communicates with github’s api ->  
Implemented. I used axios on the back/front ends.  

### Clicking on the repository should load additional information from github’s api (pick any additional fields you wish to show) ->  
implemented. I choose to display metrics on all repos and the user could choose one by one which ones to add,  
instead of going back and forth. I choose to display the indivdual repo's: id, name, watchers, forks, owner.  
   
### The user should also be able to add repositories to their profile  ->  
not implemented  

### The user should also be able add a short description to them   ->  
not implmented  
  
### Saving should be persistent between page refreshes ->  
implementd using store.js which makes it easier then using localstorage (supports parsing, objects) and preferable to redux as redux is 
not presistent over refreshes  
  
### Results should be saved in the backend, either in a db such as mongo, or an in memory cache such as redis ->  
implemented with mongo db.  

## Bonus points  

### Unit/Integration tests ->  
If i had more time i would use jest, as it gives a full coverage of unit, integration and mockimg capabillities  
  
### Docker and docker-compose ->  
Implemented.  
  
### Filtering and sorting of results ->  
If i had more time i would have implemented using simple filter/sort functions, and  
give the user a choice to store his choices so next time the results will be already sorted/filtered
  
### Error handling ->  
implemented minimaly. If i had more time i would have used the built in node errorobject for costum handling,  
the backend would dictate the errors to the F/E and i would use snackbars to display them to the user.  
  
### Logging ->  
Implemented with pino-http. If i had more time i would save the logs to kibana | a db collection for easier debugging.

## Special Remarks:  
If i had more time i would also have refrained from usinf inline styles and used pallete(theme object),  
I would have added responsiveness using Grid layout,  
I would have added tests with jest to the frontend (snapshots, unit/integration),  
I would have used redux for cross component state management,  
I would have created speration of concerns in the frontend (a file for rendering, file to handle states, file for logic),  
which would have made it easier to test.  
I would have mocked mongo using jest/promises in the B/E, and only read/write to the db in production or in e2e testing.  
I would have optimized the build by running `npm run build`.     

## Usage:  
clone the repository.  
run `docker-compose build`  
run `docker-compose up -d mongo`  
run `docker-compose up -d server`  
run `docker-compose up -d client`  
In the browser, go to `http://localhost:3000/`

## Images:  
### Results:  
![Results](/results.PNG)  
  
###  Details:  
![GitHub Logo](/details.PNG)
