describe('data type', () => {
    it('should must declare', () => {
        let name: String = "Doni Darmawan";
        let balance: Number = 1000000;
        let isVip: Boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);

        // name = true; // success ketika unit test dirunning
        // balance = '1000000'; // success ketika unit test dirunning
        // isVip = 1; // success ketika unit test dirunning
    });
    
});
