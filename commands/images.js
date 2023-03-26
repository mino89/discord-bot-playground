const { SlashCommandBuilder } = require('discord.js');
const ai = require("../integrations/ai")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('image')
		.setDescription('get back an image based on your prompt')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input of your prompt')
				// Ensure the text will fit in an embed description, if the user chooses that option
				.setRequired(true)),
	async execute(interaction) {
		const prompt = interaction.options.getString('input')
		await interaction.reply('working on it');
		//await the response of api
		const result = await ai.image(prompt)
		await interaction.followUp(result);
	},
};