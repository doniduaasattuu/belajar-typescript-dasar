describe("Switch", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      switch (name) {
        case "Eko":
          return "Hi Eko";
        case "Joko":
          return "Hi Joko";
        default:
          return "Hello";
      }
    }

    expect(sayHello("Eko")).toBe("Hi Eko");
    expect(sayHello("Joko")).toBe("Hi Joko");
    expect(sayHello("Budi")).toBe("Hello");
  });
});
