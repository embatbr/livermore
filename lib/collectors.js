/**
* Collects data from exchanges' APIs.
*/


var Pusher = require('pusher-js/node')
var Queue = require('queue-fifo');


var collector = (confs, handler, get_channel) => {
    return {
        start: () => {
            confs.subscriptions.forEach((subscription) => {
                var channel_name = subscription.channel_name;
                var event = subscription.event;

                var channel = get_channel(channel_name);

                channel.bind(event, (data) => {
                    handled_data = handler.handle(channel_name, data);
                    console.log(channel_name, handled_data);
                });
            })
        }
    };
};


var bitstamp_collector = (confs, handler) => {
    pusher = new Pusher(confs.pusher_key, {
        encrypted: true
    });

    return collector(confs, handler, (channel_name) => {
        return pusher.channel(channel_name) || pusher.subscribe(channel_name);
    });
};


module.exports = {
    bitstamp_collector: bitstamp_collector
};