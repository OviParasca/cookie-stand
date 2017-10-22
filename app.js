'use strict';

// global variables
var hoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allLocations = [];
var totalCookiesByHour = 0;
var netTotal = 0;
var tableEl = document.getElementById('cookieTable');

// constructor for our objects
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  allLocations.push(this);

  // prototype to get random customers for each hour
  this.calcRandCustByHour = function() {
    for (var i = 0; i < hoursArr.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      // console.log(this.randCustByHour[i]);
    }
  };
  this.calcRandCustByHour();

  // prototype to get random cookies for each hour
  this.calcCookiesSoldByHour = function() {
    for (var j = 0; j < hoursArr.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      this.totalCookies += this.cookiesSoldByHour[j];
      // console.log(this.cookiesSoldByHour[j]);
    }
  };
  this.calcCookiesSoldByHour();
}

// create the cookie stand objects
function createStands() {
  new MakeLocation('1st and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 25, 55, 13.1);
  new MakeLocation('Capitol Hill', 10, 45, 10.5);
  new MakeLocation('Alki', 12, 22, 7.0);
};
createStands();

// create the Header/Footer rows in the table
function createTableHeaderFooter(location, inputArray, totals) {
  var trEl = document.createElement('tr'); 
  var tdEl = document.createElement('th');   

  // add the first cell (location name)
  tdEl.textContent = location;
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl); 

  for (var i = 0; i < inputArray.length; i++) {
    var tdEl = document.createElement('th'); 
    tdEl.textContent = inputArray[i];
    // console.log(inputArray[i]);
    trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);    
  }

  // add last cell (the totals)
  var tdEl = document.createElement('th');   
  tdEl.textContent = totals;
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl); 
}
createTableHeaderFooter('Store Hours', hoursArr, 'Daily Totals')

// create the rows for the locations, cookies, and their totals for the day
function createTableBody(location, inputArray, totals) {
  var trEl = document.createElement('tr'); 
  var tdEl = document.createElement('td');   

  // add the first cell (location name)
  tdEl.textContent = location;
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl); 

  for (var i = 0; i < inputArray.length; i++) {
    var tdEl = document.createElement('td'); 
    tdEl.textContent = inputArray[i];
    trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);    
  }

  // add last cell (the totals)
  var tdEl = document.createElement('td');     
  tdEl.textContent = totals;
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl); 
}

// helper method to calculate the totals for each location
function createLocationRow(int) {
  var totals = 0;
  for (var j = 0; j < allLocations[int].cookiesSoldByHour.length; j++) {
    // console.log('location: ' + allLocations[i].name + ' ' + allLocations[i].cookiesSoldByHour[j]);
    totals += allLocations[int].cookiesSoldByHour[j];
  }
  // console.log('net total for the day at ' + allLocations[i].name + ' : ' + totals);    
  createTableBody(allLocations[int].name, allLocations[int].cookiesSoldByHour, totals);
}
function createTable() {
  for (var i = 0; i < allLocations.length; i++) {
    createLocationRow(i);
  }
}
createTable();

// create the footer rows of the table
function calculateNetTotals() {
  var totalsArr = [];
  var grandTotal = 0;

  for (var i = 0; i < hoursArr.length; i++) {
    var hourlyTotals = 0;
    for (var j = 0; j < allLocations.length; j++) {
      hourlyTotals += allLocations[j].cookiesSoldByHour[i];
      // console.log(hoursArr[i] + ' ' + hourlyTotals);
    }

    grandTotal += hourlyTotals;
    // console.log('totals for ' + hoursArr[i] + ' : ' + grandTotal);    
    totalsArr.push(hourlyTotals);
  }
  createTableHeaderFooter('Hourly Totals', totalsArr, grandTotal);  
}
calculateNetTotals();


// Submit button event
// remove the totals row, add a new store location, then add that row and the newly update totals row
document.getElementById('submitBtn').addEventListener('click', function() {
  var storeName = document.getElementById('storeName').value;
  var minCust = document.getElementById('minCust').value;
  var maxCust = document.getElementById('maxCust').value;
  var avgCookies = document.getElementById('avgCookies').value;

  // clear the inputs and remove the totals row
  clearInputFields();
  deleteLastRow();

  // append and update the new data
  new MakeLocation(storeName, minCust, maxCust, avgCookies);
  createLocationRow(tableEl.rows.length-1);
  calculateNetTotals();
})

function deleteLastRow() {
  var rowCount = tableEl.rows.length;
  tableEl.deleteRow(rowCount -1);
}

function clearInputFields() {
  var form = document.getElementById("store-form");
  form.reset();
}

