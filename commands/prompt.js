const { SlashCommandBuilder } = require('discord.js');
const ask = require("../integrations/ai")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prompt')
		.setDescription('call chatgpt ai!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back')
				// Ensure the text will fit in an embed description, if the user chooses that option
				.setRequired(true)),
	async execute(interaction) {
		const prompt = interaction.options.getString('input')
		await interaction.reply('working on it');
		//await the response of api
		const result = await ask(prompt)
		await interaction.followUp(result);
	},
};