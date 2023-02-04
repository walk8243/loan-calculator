import { Command } from 'commander';

const program = new Command();

program
	.name('@walk8243/loan-calculator')
	.description('ローンの返済額を計算する')
	.version('1.0.0', '-v, --version', 'バージョンを表示する')
	.helpOption('-h, --help', 'ヘルプを表示する');

program.parse();
