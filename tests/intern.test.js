const intern = require('../lib/intern');

describe('engineer', () => {
    it("should create an employee within a sub class of 'intern' which includes a parameter for school name", () => {
        //Arrange
        const role = 'intern';

        //Act
        const obj = new engineer(['name', 'id', 'email', 'role', 'school']);

        //Assert
        expect(obj.role).toEqual(role);
    });

    //Exception
    it("should throw an error if employee 'role' does not equal 'intern'", () => {
        //Arrange
        const cb = () => new intern();
        const err = new Error(
            "Expected employee 'role' to be 'intern'"
        );

        //Assert
        expect(cb).toThrowError(err);
    });
});