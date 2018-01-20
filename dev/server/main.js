import hello from './../lib/hello'

global.callHello = () => {
    Logger.log(hello('takanakahiko '))
}