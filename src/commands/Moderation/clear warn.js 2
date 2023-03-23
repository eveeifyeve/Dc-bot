const SlashCommands = process.env.SlashCommands;
if (SlashCommands === false) return;
const { SlashCommandBuilder } = require("@discordjs/builders");
const { PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("clearwarns")
  .setDescription("Clears a member warnings")
  .addUserOption(option => option.setName('target').setDescription('The member you clear the warns of ').setRequired(true))
  .addNumberOption(option => option.setName('number').setDescription('The number of the warns you want to clear ').setRequired(true)),
  async execute (interaction) {

    const member = interaction.options.getUser('target');
    const warnNum = interaction.options.getNumber('number');
    
    let warns = await db.get(`warns_${member}`);

    if (warnNum > warns) return await interaction.reply({content: ` You can clear a max of ${warns} warnings from ${member.tag}` , ephermal: true});
    
    let afwarns = await db.set(`warns ${member}`, warnNum);

    const embed = new EmbedBuilder()
    .setColor("Green")
    .setDescription (` :white_check_mark: ${member.tag} now has **${afwarns}** warn(s) `)
    
    const dmEmbed = new EmbedBuilder()
    .setColor("Green")
    .setDescription (` :white_check: You have been **warns** have been cleared in ${interaction.guild.name} | you now have **${afwarns}** warn(s) `)

    await interaction.reply({embeds: [embed] });
     await interaction.reply({embeds: [dmEmbed] }).catch(err => {
      return;
    })
    }
  }
