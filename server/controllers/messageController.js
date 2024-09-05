
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";



export const sendMessage = async (req, res) => {

  try {
    const senderId = req.user._id;
    const reciverId = req.params.id
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "please fill the required field" })
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, reciverId] }
    })

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, reciverId]
      })
    }

    const newMessage = new Message({
      senderId,
      reciverId,
      message
    })

    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }


    await Promise.all([conversation.save(), newMessage.save()])

    // socket functionality here


    res.status(200).json(newMessage)

  } catch (error) {
    console.log("Error in sendMessage", error.message);
    res.status(500).json({ error: "Internal server error" });
  }

};

export const reciveMessage = async (req, res) => {

  try {

    const chatToUserId = req.params.id
    const senderId = req.user._id


    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, chatToUserId] }
    })

    await conversation.populate("messages")

    console.log(conversation);


    if (!conversation) {
      return res.status(200).json([])
    }
    const conversationData = conversation.messages

    res.status(200).json(conversationData)


  } catch (error) {
    console.log("Error in reciveMessage", error.message);
    res.status(500).json({ error: "Internal server error" });

  }

}
