const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const GlobalMessage = require("../../models/GlobalMessage");
const Message = require("../../models/Message");
const Conversation = require("../../models/Conversation");
const mongoose = require("mongoose");

let jwtUser;
// global validation
router.use((req, res, next) => {
	let token = req.headers.auth;
	//token bearer token...
	//check token is present
	if (!token) {
		return res.status(400).json("unauthorised");
	}
	// validating token
	jwtUser = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
	console.log({ jwtUser });
	// jwtUser is a loged in user
	if (!jwtUser) {
		return res.status(400).json("unauthorised");
	} else {
		next();
	}
});

//api/messages/global_message
router.post("/global_message", async (req, res) => {
	let message = new GlobalMessage({
		from: jwtUser.id,
		message: req.body.message,
	});
	// req.io.sockets.emit('messages',req.body.body);
	let saveMessage = await message.save();
	res.json(saveMessage);
});

//api/messages/personal
router.post("/personal", async (req, res) => {
	let from = new mongoose.Types.ObjectId(jwtUser.id);
	let to = new mongoose.Types.ObjectId(req.body.reciever);

	let conversation = await Conversation.findOneAndUpdate(
		{
			recipients: {
				$all: [{ $elemMatch: { $eq: from } }, { $elemMatch: { $eq: to } }],
			},
		},
		{
			recipients: [from, to],
			lastMessage: req.body.message,
		},
		{
			upsert: true,
			new: true,
			setDefaultsOnInsert: true,
		}
	);

	let message = new Message({
		conversation: conversation._id,
		from: from,
		to: to,
		body: req.body.message,
	});

	let saveMessage = message.save();
	res.json(message);
});

//api/messages/fetchMessages
router.get("/fetchMessages", async (req, res) => {
	const from = new mongoose.Types.ObjectId(jwtUser.id);
	const to = new mongoose.Types.ObjectId(req.body.to);
	const conversation = await Conversation.findOne({recipients:[from,to]})
	const messages= await Message.find({conversation:conversation._id})
	res.json({conversation,messages})
});

//api/messages/fetchConversationList
router.get("/fetchConversationList", async (req, res) => {
	const from = new mongoose.Types.ObjectId(jwtUser.id);
	const conversations = await Conversation.find(); 
	res.json({ conversations});
});

//api/messages/fetchGlobalMessages
router.get("/fetchGlobalMessages", async (req, res) => {
	const globalMessages= await GlobalMessage.find()
	res.json(globalMessages)
});



module.exports = router;
