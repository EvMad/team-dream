const manager = require("../lib/manager");

describe('manager', () => {
    it("should create an employee within a sub class of 'manager' which includes a parameter for office number", () => {
        //Arrange
        const role = 'manager';

        //Act
        const obj = new manager(['name', 'id', 'email', 'office number']);

        //Assert
        expect(obj.role).toEqual(role);
    });

    //Exception
    it("should throw an error if employee 'role' does not equal 'manager'", () => {
        //Arrange
        const cb = () => new manager();
        const err = new Error(
            "Expected employee 'role' to be 'manager'"
        );

        //Assert
        expect(cb).toThrowError(err);
    });
});