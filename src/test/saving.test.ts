import assert from "assert";

import User from "../models/User";

//describe tests
describe("Saving records", () => {
  //Create tests
  it("Saves a record to the database", async () => {
    let user = new User({ name: "admin" });
    const savedUser = await user.save();
    assert(savedUser.isNew === false);
  });
});
