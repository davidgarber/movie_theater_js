var Ticket = {
  cost: 10,
  age: function(age) {
    if ( age >= 60 ) {
      this.cost = this.cost - 3;
    } else if ( age <= 59) {
      return this.cost;
    }
  },

  firstRelease: function(firstRelease) {
    if (firstRelease == 1) {
      return this.cost;
    } else if (firstRelease == 2) {
      this.cost = this.cost + 3;
      return this.cost;
    }
  },

  movieTime: function(movieTime) {
    if (movieTime < 6) {
      this.cost = this.cost - 3;
    } else if (movieTime >= 6) {
      return this.cost;
    }
  }
};
