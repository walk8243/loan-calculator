import { Command } from 'commander';
import { calculate } from './index';
import type { LoanSetting } from './calc';

const program = new Command();

program
	.name('@walk8243/loan-calculator')
	.description('ローンの返済額を計算する')
	.version('1.0.0', '-v, --version', 'バージョンを表示する')
	.helpOption('-h, --help', 'ヘルプを表示する')
	.option('-c, --corpus <corpus>', '元金（万円）')
	.option('-i, --interest <interest>', '金利（年利％）')
	.option('-t, --term <term>', 'ローン年数（年）', '35')
	.option('-b, --bonus [bonus]', 'ボーナス払いの割合（％）', '0')
	.action(({ term, bonus, corpus, interest }) => {
		const input: LoanSetting = {
			corpus: Number.parseInt(corpus),
			interest: Number.parseFloat(interest),
			bonus: Number.parseInt(bonus) / 100,
			term: Number.parseInt(term),
		};
		console.log('LoanSetting', input);
		const result = calculate(input);

		console.log(`元金　　: ${result.corpus}万円`);
		console.log(`年利　　: ${result.interest}%`);
		console.log(`返済期間: ${result.term}年`);

		console.log('=================================');

		console.log(`毎月返済額: ${result.monthly}円`);
		console.log(`ボーナス返済額: ${result.bonus}円`);
		console.log(`総支払額　: ${result.amount}円`);
	});

program.parse();
