#!/usr/bin/env node
import './polyfills';
import { Command } from 'commander';
import * as inquirer from 'inquirer';
import { start } from './logic';

const commander = new Command();

const questions:any[] = [
  {type:'number', name:'gridSize', message:'Enter the grid size'},
  {type:'number', name:'ships', message:'Enter the number of ships'},
  {type:'number', name:'iterations', message:'Enter the number of iterations'}
];
commander
  .version('1.0.0')
  .description('Test battleship bot (https://github.com/RaeWinTan/RXJSLearn) performance')
commander
  .command('setTest')
    .alias('st')
    .description('Set test parameters')
    .action(() => {
        inquirer.prompt(questions).then((p:any) =>{
            if(Number.isNaN(p.gridSize) || Number.isNaN(p.ships) || Number.isNaN(p.iterations)){
              console.error("All parameters must be filled");
              process.exit();
            }
            start(p.gridSize, p.ships, p.iterations)
        })
    })

if(!process.argv.slice(2).length) {
    commander.outputHelp()
    process.exit()
}
commander.parse(process.argv)
//commander.parse(process.argv)
