const mongoose = require("mongoose");
const noteSchema = mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamp: true }
);

module.export = mongoose.model("Note", noteSchema);
