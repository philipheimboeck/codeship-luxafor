const Luxafor = require("luxafor-api");

const ALL = 0xFF;
const speed = 60;

const options = {
    defaults: {
        setColor: {
            target: ALL
        }
    }
}

const device = new Luxafor(options);
device.off(ALL);

module.exports = {
    setAlarm: function () {
        device.flash('#f00', ALL, speed, 5);
    }
}
