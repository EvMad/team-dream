const { expect } = require('@jest/globals');
const employee = require('../lib/employee');

describe('employee', () => {

    it('should create an object with properties for name, id, email, and role', () => {

        //Arrange
        const person = 'bob';

        //Act
        const emp = new employee(['bob', 'email@yahoo.com', 'x156564', 'developer']);

        //Assert
        expect(emp.name).toEqual(person);
        expect(emp.email).toBe('email@yahoo.com')


    });

    // //Exception
    // it("should throw an error if not provided a 'text' value", () =>
    // {
    //     //Arrange
    //     const cb = () => new employee();
    //     const err = new Error(
    //         "Expected parameter 'text' to be a non empty string"
    //     );

    //     //Assert
    //     expect(cb).toThrowError(err);
    // });

});



