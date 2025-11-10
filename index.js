import fs from 'fs';

const config = JSON.parse(fs.readFileSync('config.json'));

import { Client } from 'discord.js-selfbot-v13';

const client = new Client({
    checkUpdate: false,
    rejectOnRateLimit: (ratelimitInfo) => {
        console.warn("Rate limit hit:", ratelimitInfo);
        return false; 
    }
});

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    const channel = client.channels.cache.get(config.targetMessageChannelId) || await client.channels.fetch(config.targetMessageChannelId).catch(err => null);
    if (!channel || channel.type !== 'GUILD_TEXT') {
        console.error('Invalid channel ID or channel is not a text channel.');
        client.destroy();
        return;
    }
    let message = channel.messages.cache.get(config.targetMessageId) || await channel.messages.fetch(config.targetMessageId).catch(err => null);
    if (!message) {
        console.error('Message not found.');
        client.destroy();
        return;
    }
    let count = 0;              
    while (true) {
        try {
            const reportId = await message.report(config.reportReasons);
            console.log(`Report #${++count} | ${reportId} sent successfully.`);
        } catch (error) {
            console.error('Failed to send report:', error);
        }
        await new Promise(resolve => setTimeout(resolve, config.reportDelay));
    }
});

client.login(config.token);
