
 
 
 function berekenHypotheek(income, partnerIncome, mortgagePeriod, postcode) {
    const maxLoanAmount = calculateMaxLoanAmount(income, partnerIncome, mortgagePeriod, postcode);
    const monthlyPayment = calculateMonthlyPayment(maxLoanAmount, mortgagePeriod);
    const totalPayments = calculateTotalPayments(monthlyPayment, mortgagePeriod);

    return {
        maxLeenBedrag: maxLoanAmount.toFixed(2),
        maandelijkseBetaling: monthlyPayment.toFixed(2),
        totaalBedragen: totalPayments.toFixed(2),
    };
}

 function calculateMaxLoanAmount(income, partnerIncome, mortgagePeriod, postcode) {
    // Implement logic to calculate the maximum loan amount based on the provided requirements
    // Example implementation:
    const maxLoanAmount = (income + partnerIncome) * 4.25;
    return maxLoanAmount;
}

function calculateMonthlyPayment(loanAmount, mortgagePeriod) {
    // Implement logic to calculate the monthly payment based on the provided requirements
    // Example implementation:
    const annualInterestRate = getInterestRate(mortgagePeriod) / 100; // Convert to decimal
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = mortgagePeriod * 12;
    const monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)));
    return monthlyPayment;
}


 function calculateTotalPayments(monthlyPayment, mortgagePeriod) {
    return monthlyPayment * mortgagePeriod * 12;
}


function getInterestRate(mortgagePeriod) {
    // Implement logic to retrieve the interest rate based on the selected mortgage period
    // Example implementation:
    switch (mortgagePeriod) {
        case 1:
            return 2;
        case 5:
            return 3;
        case 10:
            return 3.5;
        case 15:
            return 4.0; 
        case 20:
            return 4.5;
        case 30:
            return 5;
        default:
            return 0;
    }
}


module.exports = {
    calculateMaxLoanAmount,
    calculateMonthlyPayment,
    calculateTotalPayments,
    getInterestRate,
    berekenHypotheek,
};
