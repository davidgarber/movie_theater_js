describe("Ticket", function() {
  describe("age", function() {
    it("gives discount based on age", function() {
    var testTicket = Object.create(Ticket)
    testTicket.age(60)
    expect(testTicket.cost).to.equal(7)
  });

    it("does not give discount", function() {
      var testTicket = Object.create(Ticket)
      testTicket.age(20)
      expect(testTicket.cost).to.equal(10)
  });
});

 describe("firstRelease", function() {
   it("does not give a discount if it is not a first release", function() {
     var testTicket = Object.create(Ticket)
     testTicket.firstRelease(1)
     expect(testTicket.cost).to.equal(10)
   });

   it("increases cost if it is a first release", function() {
     var testTicket = Object.create(Ticket)
     testTicket.firstRelease(2)
     expect(testTicket.cost).to.equal(13)
   });
 });

 describe("movieTime", function() {
   it("gives a discount if time is before 6", function() {
     var testTicket = Object.create(Ticket)
     testTicket.movieTime(5)
     expect(testTicket.cost).to.equal(7)
   });

   it("does not give a discount if the time is 6 or after", function() {
     var testTicket = Object.create(Ticket)
     testTicket.movieTime(7)
     expect(testTicket.cost).to.equal(10)
   });
 });
});
