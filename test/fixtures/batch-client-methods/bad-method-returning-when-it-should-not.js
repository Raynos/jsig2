'use strict';

module.exports = BatchClient;

BatchClient.prototype._sendRequest = _sendRequest;

function _sendRequest(foo) {
    this.value = foo;

    return 42;
}

function BatchClient(channel, hosts) {
    this.channel = channel;
    this.hosts = hosts;

    this.value = '';
}
