import { Employee, Manager } from "../src/employee";
import { Person } from "../src/Person";
import { Seller } from "../src/seller";

describe('Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: "Toko Handphone",
            nib: '123123123',
            npwp: '321321321',
        }

        seller.name = "Toko Saya";
        // seller.nib = "456456456"; // Cannot assign to 'nib' because it is a read-only property.
        console.info(seller);
    });
    
    it('should support function interface', () => {
    
        interface addFunction {
            (value1: number, value2: number): number;
        }
        const add: addFunction = (value1:number, value2: number): number => {
            return value1 + value2;
        }
        expect(add(2,2)).toBe(4);
    });
    
    it('should support indexable interface', () => {
        
        interface StringArray {
            [index: number]: string;
        }
        const names: StringArray = ['Eko', 'Kurniawan', 'Khannedy'];
        console.log(names);
    });
 
    it('should support indexable interface for non number index', () => {
        
        interface StringDictionary {
            [key:string] : string;
        }
        const dictionary: StringDictionary = {
            name: "Eko",
            address: "Indonesia"
        } 
        expect(dictionary.name).toBe('Eko')
        expect(dictionary.address).toBe('Indonesia')
    });
    
    it('should support extends interface', () => {
        const employee: Employee = {
            id: '1',
            name: "Doni",
            division: "Engineering"
        }
        console.log(employee)

        const manager: Manager = {
            id: '2',
            name: "Weerasak P.",
            division: "Engineering",
            numberOfEmployees: 58
        }
        console.log(manager)
    });

    it('should support function in interface', () => {
        const person: Person = {
            name: "Doni",
            sayHello: function(name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        expect(person.sayHello("Budi")).toBe('Hello Budi, my name is Doni');
    });
    
    it('should support intersection type', () => {
        
        interface HasId {
            id: string;
        }
        interface HasName {
            name: string;
        }

        // interface Person extends HasName, HasId {
        // }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: '1',
            name: 'Doni'
        }
    });

    it('should support type assertion', () => {

        const person: any = {
            name: 'Eko',
            age: 30,
        }

        const person2 : Person = person as Person;
        // person2.sayHello("Budi");
        console.info(person2); // { name: 'Eko', age: 30 }
    });
    

});
