describe('Object', () => {
    it('should support in typescript', () => {
        const person: {id: number, name: string, hobbies?: string[]} = {
            id: 1,
            name: "Doni",
            hobbies: ['Coding', 'Reading']
        }
    });
    
});
