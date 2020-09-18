mport { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final

console.log(
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let  twentyFourteen = fifaData.filter(item => item["Year"] === 2014 &&& item["Stage"] === "Final")

console.log(twentyfourteen[0]["Home Team Name"])
console.log(twentyFourteen[0]["Away Team Name"])
console.log(twentyFourteen[0]["Home Team Goals"])
console.log(twentyFourteen[0]["Away Team Goals"])
console.log(twentyFourteen[0]["Win conditions"])

fifaData[filter(function(item)]{
    return twentyFourteen.push[item.year === 2014 && item.stage === "Final"]
}
console.log(

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

const arr = [];
const result = runners.forEach(item => arr.push(`last name: ${item.last_name}, shirt size ${item.shirt_size}`));

    /* code here */

};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinalsCB) {
    return getFinalsCB(data).map(function(item){
        return item.Year;

    })

    /*  code here */

};

getYears();

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, getFinalsCB) {
    let winners = [];
    getFinalsCB(data).forEach(function(item) {
        if(item['Home Team Goals'] > item['Away Team Goals']) {
            winners.push(item['Home Team Name']);
        } ele if(item['Away Team Goals'] > item['Home Team Goals']) {
            winners.push.item['Away Team Name']);
        }
    });
    return winners;
};

console.log(getWinners(fifaData, getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinnersCB, getYearsCB) {
    let winners = getWinnersCB;
    let years = getYearsCB;
    let yearlyWinners = [];

    winners.forEach(function(item, index){
        yearlyWinners.push(`in ${years[index]}, ${item} won the world cup!`)
    })
    console.log(winners)
    return yearlyWinners; 
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
