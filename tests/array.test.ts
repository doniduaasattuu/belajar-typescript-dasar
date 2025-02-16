describe('Array', () => {
    it('should same with javascript', () => {
        const names: string[] = ['eko', 'budi', 'joko'];
        const values: number[] = [1,2,3];
          
        console.info(names);
        console.info(values);
    });
  
    it('should support readonly aray', () => {
        const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis'];

        console.info(hobbies[0])
        console.info(hobbies[1])
        console.info(hobbies[2])
        // hobbies[0] = 'main game'; //Index signature in type 'readonly string[]' only permits reading.
    });

    it('should support tuple', () => {
        const person: readonly [string, string, number] = ['Doni', 'Darmawan', 30];

        console.info(person);
    });
    
    
});
