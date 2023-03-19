const mongoose = require('mongoose') 
const MongoDbUrl = process.env.MongoDbUrl;

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

    const SlashCommands = process.env.SlashCommands;
        if (SlashCommands === false) console.log('Slash commands are off to turn on set .env to true');
        if (SlashCommands === true) console.log('Slash commands are on to turn off set .env to false');
        if (!MongoDbUrl) return await console.log('You Must Have A Mongo Url');
        
        await mongoose.connect(MongoDbUrl || '', {
            keepAlive: true,
            useNewUrlPaser: true,
            useUnifiedTopology: true
        });

        async function pickPresence () {
            const option = Math.floor(Math.random() * statusArray.length);

            try {
                await client.user.setPresence({
                    activities: [
                        {
                            name: statusArray[option].content,
                            type: statusArray[option].type,

                        },
                    
                    ],

                    status: statusArray[option].status
                })
            } catch (error) {
                console.error(error);
            }
        }
    },
};