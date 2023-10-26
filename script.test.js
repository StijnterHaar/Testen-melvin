const {
  calculateMaxLoanAmount,
  calculateMonthlyPayment,
  calculateTotalPayments,
  getInterestRate,
  berekenHypotheek,
} = require("./script");

// Test for calculateMaxLoanAmount
test("Calculate maximum loan amount with different incomes", () => {
  expect(calculateMaxLoanAmount(60000, 40000, 20, "12345")).toBe(425000);
  expect(calculateMaxLoanAmount(80000, 50000, 10, "54321")).toBe(552500);
});

// Test for calculateMonthlyPayment
test("Calculate monthly payment with different loan amounts and periods", () => {
  expect(calculateMonthlyPayment(300000, 30)).toBeCloseTo(
    1610.4648690364195,
    2
  );
  expect(calculateMonthlyPayment(200000, 15)).toBeCloseTo(
    1479.3758512185157,
    2
  );
});

// Test for calculateTotalPayments
test("Calculate total payments with different monthly payments and periods", () => {
  expect(calculateTotalPayments(1518.07, 30)).toBeCloseTo(546505.2, 2);
  expect(calculateTotalPayments(1854.41, 15)).toBeCloseTo(
    333793.80000000005,
    2
  );
});

// Test for getInterestRate
test("Retrieve interest rate based on mortgage period for all cases", () => {
  expect(getInterestRate(1)).toBe(2);
  expect(getInterestRate(5)).toBe(3);
  expect(getInterestRate(10)).toBe(3.5);
  expect(getInterestRate(20)).toBe(4.5);
  expect(getInterestRate(30)).toBe(5);
  expect(getInterestRate(50)).toBe(0); // Test the default case
});

// Test for berekenHypotheek
test("Calculate mortgage based on income, partner income, mortgage period, and postcode", () => {
  const result1 = berekenHypotheek(60000, 20000, 20, "12345");
  expect(result1.maxLeenBedrag).toBe("340000.00");
  expect(result1.maandelijkseBetaling).toBe("2151.01");
  expect(result1.totaalBedragen).toBe("516241.89");

  const result2 = berekenHypotheek(80000, 50000, 10, "54321");
  expect(result2.maxLeenBedrag).toBe("552500.00");
  expect(result2.maandelijkseBetaling).toBe("5463.44");
  expect(result2.totaalBedragen).toBe("655613.30");
});

// Integration test
test("Calculate mortgage details based on inputs", () => {
  const income = 60000;
  const partnerIncome = 40000;
  const mortgagePeriod = 20;
  const postcode = "12345";

  const maxLoanAmount = calculateMaxLoanAmount(
    income,
    partnerIncome,
    mortgagePeriod,
    postcode
  );
  const monthlyPayment = calculateMonthlyPayment(maxLoanAmount, mortgagePeriod);
  const totalPayments = calculateTotalPayments(monthlyPayment, mortgagePeriod);
  const interestRate = getInterestRate(mortgagePeriod);

  const mortgageDetails = berekenHypotheek(
    income,
    partnerIncome,
    mortgagePeriod,
    postcode
  );

  // Verify that the calculated values match the expected results
  expect(mortgageDetails.maxLeenBedrag).toBe(maxLoanAmount.toFixed(2));
  expect(mortgageDetails.maandelijkseBetaling).toBe(monthlyPayment.toFixed(2));
  expect(mortgageDetails.totaalBedragen).toBe(totalPayments.toFixed(2));
  expect(interestRate).toBe(4.5); 
});

// Integration test 2
test("Calculate mortgage details based on inputs", () => {
  const income = 40000;
  const partnerIncome = 20000;
  const mortgagePeriod = 10;
  const postcode = "6591";

  const maxLoanAmount = calculateMaxLoanAmount(
    income,
    partnerIncome,
    mortgagePeriod,
    postcode
  );
  const monthlyPayment = calculateMonthlyPayment(maxLoanAmount, mortgagePeriod);
  const totalPayments = calculateTotalPayments(monthlyPayment, mortgagePeriod);
  const interestRate = getInterestRate(mortgagePeriod);

  const mortgageDetails = berekenHypotheek(
    income,
    partnerIncome,
    mortgagePeriod,
    postcode
  );

  // Verify that the calculated values match the expected results
  expect(mortgageDetails.maxLeenBedrag).toBe(maxLoanAmount.toFixed(2));
  expect(mortgageDetails.maandelijkseBetaling).toBe(monthlyPayment.toFixed(2));
  expect(mortgageDetails.totaalBedragen).toBe(totalPayments.toFixed(2));
  expect(interestRate).toBe(3.5); 
});

// Integration test 3
test("Calculate mortgage details based on inputs", () => {
  const income = 40000;
  const partnerIncome = 0;
  const mortgagePeriod = 10;
  const postcode = "1245";

  const maxLoanAmount = calculateMaxLoanAmount(
    income,
    partnerIncome,
    mortgagePeriod,
    postcode
  );
  const monthlyPayment = calculateMonthlyPayment(maxLoanAmount, mortgagePeriod);
  const totalPayments = calculateTotalPayments(monthlyPayment, mortgagePeriod);
  const interestRate = getInterestRate(mortgagePeriod);

  const mortgageDetails = berekenHypotheek(
    income,
    partnerIncome,
    mortgagePeriod,
    postcode
  );

  // Verify that the calculated values match the expected results
  expect(mortgageDetails.maxLeenBedrag).toBe(maxLoanAmount.toFixed(2));
  expect(mortgageDetails.maandelijkseBetaling).toBe(monthlyPayment.toFixed(2));
  expect(mortgageDetails.totaalBedragen).toBe(totalPayments.toFixed(2));
  expect(interestRate).toBe(3.5); 
});

