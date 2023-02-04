export const calculateNormal = (input: LoanSetting): LoanResult => {
	const corpus = input.corpus * 10000;
	const paymentCount = input.term * 12;
	const monthlyInterest = input.interest * 100 / 12 / 100 / 100;
	const chargeScale = (1 + monthlyInterest) ** paymentCount;
	console.log({ paymentCount, monthlyInterest, chargeScale });

	const monthlyPayment = Math.floor((corpus * monthlyInterest * chargeScale) / (chargeScale - 1));
	const amountPayment = monthlyPayment * paymentCount;
	return {
		monthly: monthlyPayment,
		amount: amountPayment,
	};
};

export type Loan = LoanSetting & LoanResult;

export interface LoanSetting {
	corpus: number;
	interest: number;
	term: number;
}

export interface LoanResult {
	monthly: number;
	amount: number;
}
