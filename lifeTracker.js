//This program calculates different measurements of your age
var floatYears = parseFloat(prompt("How old are you?")).toFixed(2);
var floatMonths = (floatYears * 12);
var floatFortnights = (floatYears * 52 / 2);
var floatWeeks = (floatYears * 52);
var floatDays = (floatYears * 365);
alert("Time alive: "+floatYears+" Years, "+floatMonths+" months, "+floatFortnights+" fortnights, "+floatWeeks+", days "+floatDays+" days.");