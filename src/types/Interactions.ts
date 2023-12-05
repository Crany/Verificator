// Common imports //
import { Client } from 'discord.js';

// Slash Commands //
import { ChatInputCommandInteraction} from 'discord.js';
import { SlashCommandBuilder, SlashCommandSubcommandBuilder, SlashCommandSubcommandsOnlyBuilder } from '@discordjs/builders';

export interface Command {
    data: SlashCommandBuilder | SlashCommandSubcommandBuilder | SlashCommandSubcommandsOnlyBuilder;
    execute: (client: Client, interaction: ChatInputCommandInteraction) => Promise<void>;
}

// Context Menu //
import { ContextMenuCommandInteraction } from 'discord.js';
import { ContextMenuCommandBuilder } from '@discordjs/builders';

export interface ContextMenu {
    data: ContextMenuCommandBuilder;
    execute: (client: Client, menu: ContextMenuCommandInteraction) => Promise<void>;
}