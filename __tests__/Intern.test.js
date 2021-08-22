const Intern = require("../lib/Intern")

describe("Intern", () => {
  const testName = "Yoda";
  const testId = 0;
  const testEmail = "yoda@example.com";
  const testSchool = "Jedi Academy";

  const result = new Intern(testName, testId, testEmail, testSchool);

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
    it("should properly add the passed testSchool value to the school key", () => {
      expect(result.school).toEqual(testSchool);
    });
  });

});