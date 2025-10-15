const handler = async (sock, msg, from, args, msgTnfoObj) => {
	const { sendMessageWTyping } = msgTnfoObj;

	const text = `*👨‍💻 Developer Info – Bhanu Nayak*\n
╭─────────────⭓
│
│ *🔗 GitHub:*
│ https://github.com/bhanunayak01
│
│ *📢 Telegram Channel:*
│ https://t.me/jackthebosss
│
│ *🌐 Portfolio:*
│ https://www.bhanunayak.netlify.app
│
╰─────────────⭓`;

	await sendMessageWTyping(from, { text }, { quoted: msg });
};

module.exports.command = () => ({
	cmd: ["dev", "developer"],
	desc: "Developer info",
	usage: "dev | developer",
	handler,
});
