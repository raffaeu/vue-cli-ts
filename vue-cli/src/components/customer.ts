import { Person } from './person';

export class Customer extends Person {

    private _code: string;

    /**
     * Return the Code of customer
     */
    get code(): string {
        return this._code;
    }

    /**
     * Create a new Customer
     * @param firstName The FirstName of the Customer
     * @param lastName The LastName of the Customer
     * @param code The Code of the Customer
     */
    constructor(firstName: string, lastName: string, code: string){
        super(firstName, lastName);     
        this._code = code;   
    }

}