import { Command } from 'commander';
import { calculate } from './calculate';
import type { LoanSetting } from './calculate';

const program = new Command();

program
	.name('@walk8243/loan-calculator')
	.description('ローンの返済額を計算する')
	.version('1.0.0', '-v, --version', 'バージョンを表示する')
	.helpOption('-h, --help', 'ヘルプを表示する')
	.action(() => {
		const input: LoanSetting = {
			corpus: 3500,
			interest: 0.8,
			term: 35,
		};
		const result = calculate(input);

		console.log(`元金　　: ${result.corpus}万円`);
		console.log(`年利　　: ${result.interest}%`);
		console.log(`返済期間: ${result.term}年`);

		console.log('=================================');

		console.log(`毎月返済額: ${result.monthly}円`);
	});

program.parse();
