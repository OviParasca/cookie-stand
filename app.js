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
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
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
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
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
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
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
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
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
