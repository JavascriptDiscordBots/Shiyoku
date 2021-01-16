const Command = require('../../Sturcteres/Command');
const ms = require('ms');
const { runInContext } = require('vm');

module.exports = class extends Command {

    async run(message) {
        message.channel.send(`My Uptime Is \`${ms(this.client.uptime, { long: true })}\``);
    }

};
