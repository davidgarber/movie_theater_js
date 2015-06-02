var Ticket = {
  cost: 10,
  age: function(age) {
    if ( age >= 60 ) {
      this.cost = this.cost - 3;
    } else if ( age <= 59) {
      return this.cost;
    }
  }
};
