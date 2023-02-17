import { debug } from 'debug';
import type { LoanVar } from './calc';
const log = debug('@walk8243/loan-calculator:strictly');

export const calcStrictly = (input: LoanStrictlySetting): LoanResultUnit[] => {
	const result = [];
	for(let term=input.term,corpus=input.corpus*10000; term>0; term--) {
		const unit = calcStrictlyPerYear({ corpus, interest: input.interest, term, timesPerYear: input.timesPerYear });
		corpus = unit.balance;
		result.push(unit);
	}
	return result;
}

const calcStrictlyPerYear = (input: LoanStrictlySetting): LoanResultUnit => {
	let corpus = input.corpus;
	const paymentTimes = input.term * input.timesPerYear;
	const interest = input.interest * 100 / input.timesPerYear / 100 / 100;
	const chargeScale = (1 + interest) ** paymentTimes;
	log('calcStrictlyPerYear', { paymentTimes, interest, chargeScale });

	const payment = Math.floor((corpus * interest * chargeScale) / (chargeScale - 1));
	for(let i=0; i<input.timesPerYear; i++) {
		corpus = (1 + interest) * corpus - payment;
	}

	const balance = Math.floor(corpus);
	return {
		perTime: balance < input.timesPerYear ? payment + 1 : payment,
		amount: payment * input.timesPerYear,
		balance: balance < input.timesPerYear ? 0 : balance,
	};
}

export interface LoanStrictlySetting extends LoanVar {
	timesPerYear: number;
}

export interface LoanResultUnit {
	perTime: number;
	amount: number;
	balance: number;
}
