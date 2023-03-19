const { SlashCommandBuilder } = require ('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hey')
    .setDescription('Replys with hey!'),
    async execute(interaction, client) {
        await interaction.reply({content: 'Hey!', ephemeral: true});
    }
}