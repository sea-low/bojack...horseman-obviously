/*
                                    SLEEP DEBT CALCULATOR FROM CODECADEMY EXERCISE

function getSleepHours(day) {
    if (day === "mon") {
      return 8;
    } else if (day === "tues") {
      return 5;
    } else if (day === "wed") {
      return 4;
    } else if (day === "thu") {
      return 6;
    } else if (day === "fri") {
      return 6;
    } else if (day === "sat") {
      return 7;
    } else if (day === "sun") {
      return 30;
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours("mon") +
    getSleepHours("tues") +
    getSleepHours("wed") +
    getSleepHours("thu") +
    getSleepHours("fri") +
    getSleepHours("sat") +
    getSleepHours("sun");
  
  function getIdealSleepHours() {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    let resultantSleep = actualSleepHours - idealSleepHours;
    if (actualSleepHours === idealSleepHours) {
      console.log("Good Job! You got the right amount of sleep this week!!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        `Looks like you got a little extra sleep this week, bud. You slept ${resultantSleep} hours from your ideal amount.`
      );
    } else {
      console.log(
        `You need to get more sleep. You slept ${resultantSleep} hours from your ideal amount.`
      );
    }
  };
  
  calculateSleepDebt();
  */



  /*                            SLEEP DEBT CALCULATOR CUSTOM */

  var prompt = require('prompt-sync')();

  const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    function numberOnlyPrompt(promptString) {
        let promptResult = prompt(promptString);
        if (isNaN(promptResult)) {o
            console.log("That wasn't a number dude! Repent and retry");
            return numberOnlyPrompt(promptString);
        }
        return promptResult;
    }

  function getActualSleepHours() {
    console.log('For the following questions, type in a number.');
    let actualSleepHours = DAYS_OF_WEEK.map(x => parseInt(determineDayHours(x))); 
    //  let mon = prompt("Hours slept on Monday: ");
    //  let tue = prompt("Hours slept on Tuesday: ");
    //  let wed = prompt("Hours slept on Wednesday: ");
    //  let thu = prompt("Hours slept on Thursday: ");
    //  let fri = prompt("Hours slept on Friday: ");
    //  let sat = prompt("Hours slept on Saturday: ");
    //  let sun = prompt("Hours slept on Sunday: ");
     //let actualSleepHours = parseInt(mon) + parseInt(tue) + parseInt(wed) + parseInt(thu) + parseInt(fri) + parseInt(sat) + parseInt(sun);
     
     return actualSleepHours;
 };

 function displayActualSleepHours(hoursOfWeek) {
    let actualSleepHours = hoursOfWeek.reduce((pVal, cVal) => pVal + cVal);
    console.log(`This week, you slept a total of ${actualSleepHours} hours.`);
    return actualSleepHours;
 }
 
 function getIdealSleepHours() {
     let getIdeal = numberOnlyPrompt("Hours you need a night to feel rested: ");
     let idealSleepHours = getIdeal * 7;
     console.log(`You need ${idealSleepHours} hours of sleep a week.`)
     return idealSleepHours;
 };

 function determineDayHours(day) {
    return numberOnlyPrompt(`Hours slept on ${day}: `);
 }

 function showBadSleepDays(idealHours, hours) {
    let dailyIdealHours = idealHours / 7;
    for (let i = 0; i < hours.length; i++){
        if (hours[i] < dailyIdealHours || hours[i] > dailyIdealHours) {
            let hoursDelta = hours[i] - dailyIdealHours;
            console.log(`You missed your mark on ${DAYS_OF_WEEK[i]} by ${hoursDelta}.`);
        }
    }
 };

function calculateSleepDebt() {
    let idealSleepHours = getIdealSleepHours();
    let daysSleepHours = getActualSleepHours();
    let actualSleepHours = displayActualSleepHours(daysSleepHours);
    let resultantSleep = actualSleepHours - idealSleepHours;
    if (actualSleepHours === idealSleepHours) {
        console.log('Not too much not too less-it\'s just right! You slept the appropriate amount of hours this week! Nice job, Goldie Locks.')
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`Okay, Sleeping Beauty. Oversleeping can affect your mental health, too. You exceeded the amount of sleep you needed for this week by ${resultantSleep} hours. Work on consistency.`)
    } else {
        console.log(`You need to get to bed earlier or something, dawg. Undersleeping can negatively affect performance in all aspects of your life as well as overall mental well being. You slept ${resultantSleep} hours this week than you need to be your best.`)
    }
    showBadSleepDays(idealSleepHours, daysSleepHours);
}

calculateSleepDebt();

 