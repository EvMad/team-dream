const employee = require('../lib/employee');

describe('employee', () => {

    it('should create an object with properties for name, id, email, and role', () => {

        //Arrange
        const person = 'name';

        //Act
        const obj = new employee(['name', 'email', 'id', 'role']);

        //Assert
        expect(obj.name).toEqual(person);


    });

    //Exception
    it("should throw an error if not provided a 'text' value", () =>
    {
        //Arrange
        const cb = () => new employee();
        const err = new Error(
            "Expected parameter 'text' to be a non empty string"
        );

        //Assert
        expect(cb).toThrowError(err);
    });

});



