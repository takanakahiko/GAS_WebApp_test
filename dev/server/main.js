var hello = require('./../lib//hello');

global.callHello = () => {
    Logger.log(hello('takanakahiko '));
}