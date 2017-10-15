<<<<<<< HEAD
'use strict';

// my global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var grandTotalCookies = [];

// First and Pike Location
var firstAndPike = {
  name: 'First and Pike',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var mainDiv = document.getElementById('mainDiv');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    var tdEl = document.createElement('td');
    //give text to the new h3 element
    h3El.textContent = this.name;
    mainDiv.appendChild(h3El);
    mainDiv.appendChild(tdEl);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('td');
      //creating li elemnts with text of the hours
      var cookies = this.cookiesSoldByHour[k];
      liEl.textContent = hours[k] + ': ' + cookies + ' cookies';
      grandTotalCookies.push(cookies);
      console.log(liEl);
      tdEl.appendChild(liEl);
    }
  }
};

firstAndPike.render();

// Seatac Airport Location
var seatacAirport = {
  name: 'Seatac Airport',
  minCustPerHour: 10,
  maxCustPerHour: 50,
  avgCookieSoldPerHour: 3.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

  render: function() {
    var mainDiv = document.getElementById('mainDiv');
    var h3El = document.createElement('h3');
    var tdEl = document.createElement('td');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    h3El.textContent = this.name;
    mainDiv.appendChild(h3El);
    mainDiv.appendChild(tdEl);

    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('td');
      var cookies = this.cookiesSoldByHour[k];
      liEl.textContent = hours[k] + ': ' + cookies + ' cookies';
      grandTotalCookies[k] = (grandTotalCookies[k] + cookies);
      console.log(liEl);
      tdEl.appendChild(liEl);
    }
  }
};

seatacAirport.render();

// Seattle Center Location
var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 33,
  maxCustPerHour: 80,
  avgCookieSoldPerHour: 10.1,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

  render: function() {
    var mainDiv = document.getElementById('mainDiv');
    var h3El = document.createElement('h3');
    var tdEl = document.createElement('td');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    h3El.textContent = this.name;
    mainDiv.appendChild(h3El);
    mainDiv.appendChild(tdEl);

    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('td');
      var cookies = this.cookiesSoldByHour[k];
      liEl.textContent = hours[k] + ': ' + cookies + ' cookies';
      grandTotalCookies[k] = (grandTotalCookies[k] + cookies);
      console.log(liEl);
      tdEl.appendChild(liEl);
    }
  }
};

seattleCenter.render();

// Capitol Hill Location
var capitolHill = {
  name: 'Capitol Hill',
  minCustPerHour: 80,
  maxCustPerHour: 120,
  avgCookieSoldPerHour: 22,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

  render: function() {
    var mainDiv = document.getElementById('mainDiv');
    var h3El = document.createElement('h3');
    var tdEl = document.createElement('td');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    h3El.textContent = this.name;
    mainDiv.appendChild(h3El);
    mainDiv.appendChild(tdEl);

    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('td');
      var cookies = this.cookiesSoldByHour[k];
      liEl.textContent = hours[k] + ': ' + cookies + ' cookies';
      grandTotalCookies[k] = (grandTotalCookies[k] + cookies);
      console.log(liEl);
      tdEl.appendChild(liEl);
    }
  }
};

capitolHill.render();

// Alki Beach Location
var alki = {
  name: 'Alki',
  minCustPerHour: 18,
  maxCustPerHour: 45,
  avgCookieSoldPerHour: 4.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

  render: function() {
    var mainDiv = document.getElementById('mainDiv');
    var h3El = document.createElement('h3');
    var tdEl = document.createElement('td');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    h3El.textContent = this.name;
    mainDiv.appendChild(h3El);
    mainDiv.appendChild(tdEl);

    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('td');
      var cookies = this.cookiesSoldByHour[k];
      liEl.textContent = hours[k] + ': ' + cookies + ' cookies';
      grandTotalCookies[k] = (grandTotalCookies[k] + cookies);
      console.log(liEl);
      tdEl.appendChild(liEl);
    }
  }
};

alki.render();

// Total Cookies of each hour
var totals = {
  name: 'Totals',

  render: function() {
    var mainDiv = document.getElementById('mainDiv');
    var h3El = document.createElement('h3');
    var tdEl = document.createElement('td');

    h3El.textContent = this.name;
    mainDiv.appendChild(h3El);
    mainDiv.appendChild(tdEl);

    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('td');
      liEl.textContent = hours[k] + ': ' + grandTotalCookies[k] + ' cookies';
      console.log(liEl);
      tdEl.appendChild(liEl);
    }
  }
};

totals.render();
=======
//'use strict';

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
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
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      // console.log(this.randCustByHour[i]);
    }
  };
  this.calcRandCustByHour();

  // prototype to get random cookies for each hour
  this.calcCookiesSoldByHour = function() {
    for (var j = 0; j < hours.length; j++) {
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
  new MakeLocation('Seattle Center', 23, 65, 6.3);
  new MakeLocation('Capitol Hill', 3, 24, 1.2);
  new MakeLocation('Alki', 23, 65, 6.3);
};
createStands();

// create a table row for the hours
function createHoursRow() {
  var trEl = document.createElement('tr'); // tr == cell row
  trEl.id = 'headerRow';
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('th'); // th == header cell
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl); // add cell to the row
  }
  tableEl.appendChild(trEl); // add row to the table
}
createHoursRow();

// create a table row for the location names
function createLocationNamesColumn() {
  for (var i = 0; i < allLocations.length; i++) {
    var trEl = document.createElement('tr');
    trEl.id = 'cellRow';
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[i].name;
    trEl.appendChild(tdEl); // add cell to the row
    tableEl.appendChild(trEl); // add row to the table
  }
}
createLocationNamesColumn();

function tableRowMaker(inputArray) {
  for (var i = 0; i < inputArray.length; i++) {
    var trEl = document.getElementById('cellRow'); // tr == cell row
    for (var j = 0; j < inputArray[i].randCustByHour.length; j++) {
      var tdEl = document.createElement('td'); // td == standard cell
      tdEl.textContent = inputArray[i].randCustByHour[j];
      // console.log(inputArray[i].name + ' number of customers: ' + inputArray[i].randCustByHour[j]);
      trEl.appendChild(tdEl); // add cell to the row
    }
    tableEl.appendChild(trEl); // add row to the table
  }
}
tableRowMaker(allLocations);

// create a table row for the total cookies sold each hour
function createTotalsRow() {
  var tempArr = [];

  for (var i = 0; i < allLocations.length; i++) {
    var trEl = document.createElement('tr'); // tr == cell row

    if (tempArr.length === hours.length) {
      for (var j = 0; j < hours.length; j++) {
        // console.log(allLocations[i].name + allLocations[i].randCustByHour[j]);
        tempArr[j] = tempArr[j] + allLocations[i].randCustByHour[j];
      }
    } else {
      for (var j = 0; j < hours.length; j++) {
        // console.log(allLocations[i].name + allLocations[i].randCustByHour[j]);
        tempArr.push(allLocations[i].randCustByHour[j]);
      }
    }
  }

  for (var k = 0; k < hours.length; k++) {
    var tdEl = document.createElement('td'); // td == standard cell
    tdEl.textContent = tempArr[k];
    trEl.appendChild(tdEl); // add cell to the row
  }
  tableEl.appendChild(trEl); // add row to the table
}
createTotalsRow();
>>>>>>> df8f9e81ab3e1d9717d9f28db3ee27d0583defa7
