import { sayHello } from "../src/say-hello";

describe('sayHello', () => {
    it('should return hello eko', () => {
        expect(sayHello("eko")).toBe("Hello eko");
    });
    
});
