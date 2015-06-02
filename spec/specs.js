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
  })
 });
});
