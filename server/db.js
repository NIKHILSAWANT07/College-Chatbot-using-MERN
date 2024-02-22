const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect("####### YOUR MONGODB LINK ID:EG:     mongodb+srv://#NAME#:#PASSWORD#cluster........mongodb.net/    *REMOVE HASHES*");
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
