import { Category, Product } from "../src/type-alias";

describe('Type Alias', () => {
    it('should support type alias', () => {
        const category: Category = {
            id: '1',
            name: 'Gadget',
        }

        const product: Product = {
            id: 1,
            name: "Samsung S20",
            price: 20000000,
            category: category,
        }

        console.info(category)
        console.info(product)
    });
    
});
