import * as ModuleA from "./module-a";

jest.mock("./module-b", () => {
  return {
    __esModule: true,
    default: jest.fn().mockReturnValue({
      name: "Bobby",
      age: 36,
    }),
  };
});

describe("module A", () => {
  it("should get the name of the a module", () => {
    expect(ModuleA.default()).toBe("John Smith");
  });

  it("should get the age of the a module", () => {
    expect(ModuleA.getAge()).toBe(35);
  });

  it("should get the friend of the a module", () => {
    expect(ModuleA.getFriend()).toStrictEqual({
      name: "Bobby",
      age: 36,
    });
  });
});
