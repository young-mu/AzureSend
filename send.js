var Client = require('azure-iothub').Client;
var Message = require('azure-iot-common').Message;

var connectionString = '<iothub connectionString>';

var client = Client.fromConnectionString(connectionString);
var deviceId = '<device Id>';

var connectCallback = function (err) {
    if (err) {
        console.log('connect failed with error', err);
        return;
    }
    console.log('connect successfully');

    var message = new Message('test');
    message.properties.add('rgbled', '255,255,255');
    client.send(deviceId, message, function (err) {
        if (err) {
            console.log('send failed with error', err);
            return;
        }
        console.log('send successfully');
    });
};

client.open(connectCallback);
