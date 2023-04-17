const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
    },
    password: {
      type: string,
      required: true,
    },
    email: {
      type: string,
      required: true,
    },
  },
  { timestamp: true }
);

module.export = mongoose.model("User", userSchema);
