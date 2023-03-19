const SlashCommands = process.env.SlashCommands;
if (SlashCommands === false) return;
const { SlashCommandBuilder } = require("@discordjs/builders");
const { PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("warnings")
  .setDescription("Gets a member warnings")
  .addUserOption(option => option.setName('target').setDescription('The member you check the warning of').setRequired(true)),

  async execute (interaction) {

    const member = interaction.options.getUser('target');
    let warns = await db.get(`warns_${member}`);
    
    if (warns == null) warns - 0;

    const embed = new EmbedBuilder()
    .setColor("Green")
    .setDescription (` :white_check_mark: ${member.tag} has **${warns}** warn(s) `)

    await interaction.reply({embeds: [embed] });
    }
  }