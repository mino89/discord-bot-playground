const { SlashCommandBuilder } = require('discord.js');
const ai = require("../integrations/ai")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mood-to-color')
		.setDescription('call chatgpt ai!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input of your prompt')
				// Ensure the text will fit in an embed description, if the user chooses that option
				.setRequired(true)),
	async execute(interaction) {
		const prompt = interaction.options.getString('input')
		await interaction.deferReply({ ephemeral: true });
		//await the response of api
		await wait(4000);
		
		try{
			const result = await ai.color(prompt)
			await interaction.editReply(result);
		}catch (error){
			console.log(error)
		}
	},
};