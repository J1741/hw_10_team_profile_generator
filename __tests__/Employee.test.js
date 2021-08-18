const Employee = require("../lib/Employee")

describe("Employee", () => {
  const testName = "Luke";
  const testEmployeeID = 3;
  const testEmail = "luke@example.com";
  const result = new Employee(testName, testEmployeeID, testEmail);

  describe("name", () => {
    it("should properly add the testName value to the name key", () => {
      expect(result.name).toEqual(testName);
    });
  });

  describe("employeeID", () => {
    it("should properly add the passed testEmployeeID value to the employeeID key", () => {
      expect(result.employeeID).toEqual(testEmployeeID);
    });
  });

  describe("email", () => {
    it("should properly add the passed testEmail value to the email key", () => {
      expect(result.email).toEqual(testEmail);
    });
  });

});

