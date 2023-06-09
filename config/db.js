const mongoose = require("mongoose");
// const db = require("./keys_dev").mongoURI;

module.esports = async function () {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: false,
        useFindAndModify: false,
        useCreateIndex: false,
      },
      () => console.log("MongoDB connected ...")
    );
  } catch (error) {
    console.log("Mongoose error", error);
  }
};
