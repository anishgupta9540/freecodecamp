import { getHeadings } from "../getHeadings.js";

describe("getHeadings", () => {
  test("parses simple headings", () => {
    expect(getHeadings("name,age,city")).toEqual([
      "name",
      "age",
      "city",
    ]);
  });

  test("preserves spaces inside headings", () => {
    expect(getHeadings("first name,last name,phone")).toEqual([
      "first name",
      "last name",
      "phone",
    ]);
  });

  test("removes leading and trailing whitespace", () => {
    expect(getHeadings("username , email , signup date ")).toEqual([
      "username",
      "email",
      "signup date",
    ]);
  });
});