import { SlashCommandBuilder, EmbedBuilder } from "@discordjs/builders";
import { Command } from "../types/Interactions";

const ping: Command = {
    data: new SlashCommandBuilder()
       .setName("ping")
       .setDescription("Respons with Pong!"),
    execute: async (client, interaction) => {
        const ping = client.ws.ping;
        await interaction.reply({ embeds: [
            new EmbedBuilder().setDescription(`Pong! \`${ping}ms\``)
            .setColor(0x52dc7e)
        ] })
    }
}

export = ping;