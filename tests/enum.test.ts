import { Customer, CustomerType } from "../src/enum";

describe('Enum', () => {
    it('should support in typescript', () => {
        const customer: Customer = {
            id: 1,
            name: 'Eko',
            type: CustomerType.GOLD, // 1 
        }

        console.info(customer)
    });
        
});
