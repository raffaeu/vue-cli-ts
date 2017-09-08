import * as Vue from 'vue'

    /**
     * Constrain an object to a contract of type IPerson
     */
    export interface IPerson {
        firstName: string,
        lastName: string,
        sayHello(): string
    }

    /**
     * Implement an IPerson contract
     */
    export class Person implements IPerson {

        private _firstName: string;
        private _lastName: string;

        /**
         * Get the firstName value
         */
        get firstName(): string {
            return this._firstName
        }

        /**
         * Get the lastName value
         */
        get lastName(): string {
            return this._lastName
        }

        /**
         * Create a new instance of a Person
         * @param firstName The first name
         * @param lastName The last name
         */
        constructor(firstName: string, lastName: string){
            this._firstName = firstName
            this._lastName = lastName
        }

        /**
         * Print FirstName and LastName
        */
        sayHello(){
            return 'Hello World from ' + this.lastName + ' ' + this.firstName;
        }
    }
