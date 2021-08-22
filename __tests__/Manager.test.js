const Manager = require("../lib/Manager")

describe("Manager", () => {
  const testName = "Yoda";
  const testId = 0;
  const testEmail = "yoda@example.com";
  const testOfficeNumber = 1138;

  const result = new Manager(testName, testId, testEmail, testOfficeNumber);

  it("should be an object", () => {
    expect(typeof result).toBe("object");
  })

  describe("name", () => {
    it("should properly add the passed testName value to the name key", () => {
      expect(result.name).toEqual(testName);
    });
  });

  describe("employeeID", () => {
    it("should properly add the passed testEmployeeID value to the employeeID key", () => {
      expect(result.id).toEqual(testId);
    });
  });

  describe("email", () => {
    it("should properly add the passed testEmail value to the email key", () => {
      expect(result.email).toEqual(testEmail);
    });
  });

  describe("officeNumber", () => {
    it("should properly add the passed testOfficeNumber value to the officeNumber key", () => {
      expect(result.officeNumber).toEqual(testOfficeNumber);
    });
  });

});