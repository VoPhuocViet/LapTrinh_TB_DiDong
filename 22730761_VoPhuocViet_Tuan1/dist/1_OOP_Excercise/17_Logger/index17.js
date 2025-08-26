"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 17. Singleton Logger class
class Logger {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
// Demo
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log('This is a log message.');
console.log('Same instance:', logger1 === logger2);
