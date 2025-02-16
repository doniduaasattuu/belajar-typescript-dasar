describe("Function", () => {
  it("should support in typescript", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Eko")).toBe("Hello Eko");
    expect(sayHello()).toBe("Hello Guest");

    function printHello(name: string): void {
      console.log(`Hello ${name}`);
    }
    printHello("Eko");
  });

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;

      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("Doni", "Darmawan")).toBe("Hello Doni Darmawan");
    expect(sayHello("Doni")).toBe("Hello Doni");
  });

  it("should support function overloading", () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe(100)).toBe(1000);
    expect(callMe("Eko")).toBe("EKO");
  });

  it("should support function as parameter", () => {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("Doni", toUpper)).toBe("Hello DONI");
  });

  it("should support anonymous function as parameter", () => {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }

    expect(
      sayHello("Doni", (name: string) => {
        return name.toUpperCase();
      })
    ).toBe("Hello DONI");
  });
});
