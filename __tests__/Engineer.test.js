const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
  const testName = "Ben";
  const testEmployeeID = 1;
  const testEmail = "ben@example.com";
  const testGithubUsername = "obiwan1";

  const result = new Engineer(testName, testEmployeeID, testEmail, testGithubUsername);

  describe("name", () => {
    it("should properly add the passed testName value to the name key", () => {
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

  describe("githubUsername", () => {
    it("should properly add the passed testGithubUsername value to the githubUsername key", () => {
      expect(result.githubUsername).toEqual(testGithubUsername);
    });
  });

});