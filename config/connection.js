const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    console.log('process.env.DATABASE_NAME', process.env.DATABASE_NAME)
    const connected = await mongoose.connect(
      // `${process.env.DATABASE_URI}`,
      `mongodb://127.0.0.1:27017/${process.env.DATABASE_NAME}`,
      // 'mongodb+srv://shakir:devshakir1234$@cluster0.eq7ax.mongodb.net/movie-app?retryWrites=true&w=majority&appName=Cluster0'
    );

    if (connected) {
      // console.log(`Connected to the MongoDB : ${process.env.DATABASE_NAME}`);
      console.log(`Connected to the MongoDB :${process.env.DATABASE_NAME}`);
    } else {
      // throw new Error(
      //   `Failed to connect with MongoDB : ${process.env.DATABASE_NAME}`,

      // );
      throw new Error(`Failed to connect with MongoDB : immoving`);
    }

    return true;
  } catch (err) {
    // throw new Error(
    //   `Failed to connect with MongoDB : ${process.env.DATABASE_NAME}`,
    // );
    throw new Error(`Failed to connect with MongoDB : immoving`);
  }
};

module.exports = dbConnection;
