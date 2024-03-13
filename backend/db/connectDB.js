import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://javid:12345@fileshare.gm2jfje.mongodb.net/", {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
