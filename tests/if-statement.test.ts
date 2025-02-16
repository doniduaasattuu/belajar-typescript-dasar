describe("If Statement", () => {
  it("should support if statement", () => {
    const examValue: number = 90;

    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("Not Bad");
    } else {
      console.info("Try Again");
    }
  });
});
