import { calculateNormal, calculateBonus } from './calc';
import type { Loan, LoanSetting } from './calc';

export const calculate = (input: LoanSetting): Loan => {
	if(!input.bonus) { input.bonus = 0; }
	const normalResult = calculateNormal({ corpus: input.corpus * (1 - input.bonus), interest: input.interest, term: input.term });
	const bonusResult = calculateBonus({ corpus: input.corpus * input.bonus, interest: input.interest, term: input.term });
	return Object.assign({}, input, {
		monthly: normalResult.monthly,
		bonus: bonusResult.bonus,
		amount: normalResult.amount + bonusResult.amount,
	});
};

export {
	calculateNormal,
	calculateBonus,
}
