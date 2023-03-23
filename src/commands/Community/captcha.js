const SlashCommands = process.env.SlashCommands;
if (SlashCommands === false) return;
const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require("discord.js");
const capSchema = require('../../Schemas.js/capSchema.js');
const { execute } = require("./src/commands/Moderation/clear warn");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('capture')
    .setDescription('Setup the capture verification system')
    .addSubcommand(command => command.setName('Setup').setDescription('Setup the capture verification system').addRoleOption(option => option.setName('role').setDescription('The role you want to be given on verification').setRequired(true)).addStringOption(option => option.setName('capture').setDescription('The captue text you want in the image').setRequired(true)))
    .addSubcommand(command => command.setName('Disable').setDescription('Disable the capture verification system')),
    async execute (interaction) {

        if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: 'You dont have perms to setup or desa '})
    }
}
