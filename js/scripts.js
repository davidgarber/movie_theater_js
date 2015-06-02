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
    if (firstRelease == "no") {
      return this.cost;
    } else if (firstRelease == "yes") {
      this.cost = this.cost + 3;
      return this.cost;
    }
  },

  movieTime: function(movieTime) {
    if (movieTime < "18:00") {
      this.cost = this.cost - 3;
    } else if (movieTime >= "18:00") {
      return this.cost;
    }
  }
};

$(document).ready(function() {

  var newTicket = Object.create(Ticket);

  $("form#Ticket").submit(function(event) {
   var inputtedAge = parseInt($("input#age").val());
   var inputtedRelease = $("select#release").val();
   var inputtedTime = $("select#movietime").val();

   newTicket.age(inputtedAge)
   newTicket.firstRelease(inputtedRelease)
   newTicket.movieTime(inputtedTime)

   $(".ticketcost").text(newTicket.cost);
   event.preventDefault();

  });



});
