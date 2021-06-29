const engineer = require('../lib/engineer');

describe('engineer', () => {
    it("should create an employee within a sub class of 'engineer' which includes a parameter for git hub user name", () => {
        //Arrange
        const role = 'engineer';

        //Act
        const obj = new engineer(['name', 'id', 'email', 'role', 'github']);

        //Assert
        expect(obj.role).toEqual(role);
    });

    //Exception
    it("should throw an error if employee 'role' does not equal 'engineer'", () => {
        //Arrange
        const cb = () => new engineer();
        const err = new Error(
            "Expected employee 'role' to be 'engineer'"
        );

        //Assert
        expect(cb).toThrowError(err);
    });
});