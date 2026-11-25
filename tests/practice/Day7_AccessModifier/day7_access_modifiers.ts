class LoanAccount{
    public readonly applicationId: number;
    private balance: number;
    public customerName: string;

    constructor(applicationId: number, customerName: string, balance: number){
        this.applicationId = applicationId;
        this.balance = balance;
        this.customerName = customerName;
    }

    deposite(amount: number): void{
        if (amount <= 0){
            throw new Error("Deposite amount must not be 0")
        }
        this.balance += amount
    }

    getBalance(): number{
        return this.balance
    }
}

const loan = new LoanAccount(101, "John", 500000);

loan.deposite(50000);

console.log(loan.applicationId);
console.log(loan.customerName);
console.log(loan.getBalance());

class TestExecutionManager{
    private totalTests: number;
    private passedTests: number;
    private failedTests: number;

    constructor(){
        this.totalTests = 10;
        this.passedTests = 7;
        this.failedTests = 3;
    }

    public recordPassedTest(passedTests: number): void{
        this.totalTests += passedTests;
        this.passedTests += passedTests;
    }

    public recordFailedTest(failedTests: number): void{
        this.totalTests += failedTests;
        this.failedTests += failedTests;
    }

    public getExecutionSummary(): void{
        console.log(`Total tests: ${this.totalTests}`)
        console.log(`Passed tests: ${this.passedTests}`)
        console.log(`Failed tests: ${this.failedTests}`)
    }    
}

const testExecutionManager = new TestExecutionManager();
testExecutionManager.recordPassedTest(15)
testExecutionManager.recordFailedTest(5)
testExecutionManager.getExecutionSummary()