#!/usr/bin/env node
const program = require('commander');
const api = require('./index.js')
const pkg = require('./package.json')

program
  .version(pkg.version)
program
  .command('add')
  .description('add a task')
  .action((...args) => {
    let words
    if (args.length > 1) {
      words = args[1].join(' ')
    } else {
      words = args[1]
    }
    api.add(words).then(() => {console.log('添加成功')}, () => {console.log('添加失败')})
  });
program
  .command('clear')
  .description('clear all tasks')
  .action((...args) => {
    api.clear().then(() => {console.log('清空成功')}, () => {console.log('清空失败')})
  });

program.parse(process.argv);

if (process.argv.length === 2) {
  void api.showAll()
}