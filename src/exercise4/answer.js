const extractMessageProp = messages => messages.map(msg => msg.message)
const messagesLessThan50 = messages => messages.filter(msg => msg.length < 50)

const getShortMessage = (messages) => messagesLessThan50(extractMessageProp(messages))

module.exports = getShortMessage
