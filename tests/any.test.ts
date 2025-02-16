describe('Any', () => {
    it('should support in typescript', () => {
        const person: any = {
            id: 1,
            name: "Eko Kurniawan Khannedy",
            age: 30,
        }

        person.age = 32;
        person.address = "Indonesia"
        console.info(person);
    });
    
});
