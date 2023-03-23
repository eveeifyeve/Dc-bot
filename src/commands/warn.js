const SlashCommands = process.env.SlashCommands;
if (SlashCommands === false) return;
const { SlashCommandBuilder } = require("@discordjs/builders");
const { PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("warn")
  .setDescription("Warns a member")
  .addUserOption(option => option.setName('target').setDescription('The member you want to warn').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('The reason you want to warn')),
  async execute (interaction) {

    if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await interaction.reply({content: "You don't have the permissions to execute this command!", ephermal: true});

    const member = interaction.options.getUser('target');
    let reason = interaction.options.getString('reason');

    if (!reason) reason = "No reason provided";

    const dmEmbed = new EmbedBuilder()
    .setColor("Yellow")
    .setDescription (` :warning: You have been **warned** in ${interaction.guild.name} | ${reason} `)

    const embed = new EmbedBuilder()
    .setColor("Green")
    .setDescription (` :white_check_mark: ${member.tag} has been **Warned** | ${reason} `)

    await interaction.reply({embeds: [embed] });
    await interaction.reply({embeds: [dmEmbed] }).catch(err => {
      return;
    })

    db.add(`warns_${member}, 1 `);

  }
}