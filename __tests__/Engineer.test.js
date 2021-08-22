const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
  const testName = "Ben";
  const testId = 1;
  const testEmail = "ben@example.com";
  const testGithub = "obiwan1";

  const result = new Engineer(testName, testId, testEmail, testGithub);

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

  describe("githubUsername", () => {
    it("should properly add the passed testGithubUsername value to the githubUsername key", () => {
      expect(result.github).toEqual(testGithub);
    });
  });

});