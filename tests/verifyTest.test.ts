import { AwsIamRolePolicy, verifyPolicy } from "../main";
import * as fs from "fs";

function getJson(fileName: string) {
  const jsonContent = fs.readFileSync(fileName, "utf-8");
  const policyDocument: AwsIamRolePolicy = JSON.parse(jsonContent);
  return policyDocument;
}

describe("testing verifyPolicy", () => {
  test("should return false for single Statement *", () => {
    expect(verifyPolicy(getJson("policies/policy1ResWAst.json"))).toBe(false);
  });
  test("should return true for single Statement other than *", () => {
    expect(verifyPolicy(getJson("policies/policy1ResWOAst.json"))).toBe(true);
  });
  test("should return true for multiple Statements, neither *", () => {
    expect(verifyPolicy(getJson("policies/policy3ResWOAst.json"))).toBe(true);
  });
  test("should return false for multiple Statements, one *", () => {
    expect(verifyPolicy(getJson("policies/policy3ResWAst.json"))).toBe(false);
  });
  test("should return false for multiple Statements, every *", () => {
    expect(verifyPolicy(getJson("policies/policy3Res3Ast.json"))).toBe(false);
  });
  test("should throw wrong syntax error", () => {
    expect(() => verifyPolicy(getJson("policies/policyNoRes.json"))).toThrow(
      TypeError("wrong syntax")
    );
  });
});
