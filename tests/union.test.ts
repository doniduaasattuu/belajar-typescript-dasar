describe('Union', () => {
    it('should support union type', () => {
        let sample: number | string | boolean = "Eko";
        sample = 100;
        sample = true;

        console.info(sample);
    });
    
    it('should support type checking', () => {
        function process(value: number | string | boolean ) {
            if (typeof value == 'string') {
                return value.toUpperCase();
            } else if (typeof value == 'number')
            {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process(100)).toBe(102);
        expect(process('eko')).toBe("EKO");
        expect(process(true)).toBe(false);
    });
    
});
