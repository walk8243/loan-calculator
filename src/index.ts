import { calculateNormal } from './calc';
import type { Loan, LoanSetting } from './calc';

export const calculate = (input: LoanSetting): Loan => {
	const normalResult = calculateNormal(input);
	return Object.assign({}, input, {
		monthly: normalResult.monthly,
		amount: normalResult.amount,
	});
};
