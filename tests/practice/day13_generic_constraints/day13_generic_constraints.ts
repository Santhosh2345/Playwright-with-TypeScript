interface AutomationTest {
    testName: string;
}

function displayTest<T extends AutomationTest>(test: T): void{
    console.log(test.testName)
}

const loginTest = {
    testName: "Login",
    browser: "Chrome"
}
const APItest = {
    testName: "APITest",
    endpoint: "Chrome"
}

displayTest(loginTest)
displayTest(APItest)

interface LoanApplication {
    applicationId: number;
    customerName: string;
    loanAmount: number;
    status: string;
}

function getProperty<T, K extends keyof T>(object: T, key: K): K{
    return key
}

const loanDetails = {
    applicationId: 123,
    customerName: "Micheal",
    loanAmount: 500000
}

console.log(getProperty(loanDetails, "applicationId"));
//console.log(getProperty(loanDetails, "browser"));