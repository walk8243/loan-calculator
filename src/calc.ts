export const calculateNormal = (input: LoanVar): LoanNormalResult => {
	const corpus = input.corpus * 10000;
	const paymentTimes = input.term * 12;
	const monthlyInterest = input.interest * 100 / 12 / 100 / 100;
	const chargeScale = (1 + monthlyInterest) ** paymentTimes;
	console.log('calculateNormal', { paymentTimes, monthlyInterest, chargeScale });

	const monthlyPayment = Math.floor((corpus * monthlyInterest * chargeScale) / (chargeScale - 1));
	const amountPayment = monthlyPayment * paymentTimes;
	return {
		monthly: monthlyPayment,
		amount: amountPayment,
	};
};

export const calculateBonus = (input: LoanVar): LoanBonusResult => {
	if(input.corpus === 0) {
		return { bonus: 0, amount: 0 };
	}

	const corpus = input.corpus * 10000;
	const paymentTimes = input.term * 2;
	const bonusInterest = input.interest * 100 / 2 / 100 / 100;
	const chargeScale = (1 + bonusInterest) ** paymentTimes;
	console.log('calculateBonus', { paymentTimes, bonusInterest, chargeScale });

	const bonusPayment = Math.floor((corpus * bonusInterest * chargeScale) / (chargeScale - 1));
	const amountPayment = bonusPayment * paymentTimes;
	return {
		bonus: bonusPayment,
		amount: amountPayment,
	};
};

export type Loan = LoanSetting & LoanNormalResult & LoanBonusResult;

export interface LoanSetting extends LoanVar {
	bonus?: number,
}

export interface LoanVar {
	corpus: number;
	interest: number;
	term: number;
}

export interface LoanNormalResult {
	monthly: number;
	amount: number;
}

export interface LoanBonusResult {
	bonus: number;
	amount: number;
}
