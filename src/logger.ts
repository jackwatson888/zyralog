import { LogLevel } from './interfaces/logger.interface';
import chalk from 'chalk';
export class Log {
  static logMessage(level: LogLevel, message: string, args: any): void {
    const timestamp = new Date().toISOString();
    let emoji = '';
    let colorFunc = chalk.white;

    switch (level) {
      case LogLevel.Info:
        emoji = '🌟';
        colorFunc = chalk.greenBright;
        break;
      case LogLevel.Warning:
        emoji = '⚠️';
        colorFunc = chalk.yellow;
        break;
      case LogLevel.Error:
        emoji = '❌';
        colorFunc = chalk.red;
        break;
      case LogLevel.Success:
        emoji = '✅';
        colorFunc = chalk.green;
        break;
      default:
        emoji = '💬';
        colorFunc = chalk.white;
    }

    if (!args || args.length == 0)
        console.log(colorFunc(`[${timestamp}] ${emoji} [${level}] => `), message);
    else
    {
        console.log(colorFunc(`[${timestamp}] ${emoji} [${level}] => `), message, args[0]);
        for (let i=1; i<args.length; i++) {
            console.log(args[i]);
        }
    }
  }

  static info(message: string, ...args: any): void {
    this.logMessage(LogLevel.Info, message, args);
  }

  static warn(message: string, ...args: any): void {
    this.logMessage(LogLevel.Warning, message, args);
  }

  static error(message: string, ...args: any): void {
    this.logMessage(LogLevel.Error, message, args);
  }

  static success(message: string, ...args: any): void {
    this.logMessage(LogLevel.Success, message, args);
  }
}