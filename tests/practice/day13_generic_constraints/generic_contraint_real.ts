interface testName{
    testName: string
}
interface LoginTest extends testName{
    browser: "Chrome"| "Firefox";
    username: string
}

interface LoanTest extends testName{
    loanId: string
    loanAmount: string
}

interface APITest1 extends testName{
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "Delete"
}

function getProperty1<T extends testName, K extends keyof T>(obj: T, key: K): void{
    console.log(obj[key])
}

const loginTest1:LoginTest = {
    testName: "LoginTest",
    browser: "Chrome",
    username: "Santhosh"
}

const loanTest1:LoanTest = {
    testName: "LoanTest",
    loanId: "124578",
    loanAmount: "500000"
}

const apiTest1:APITest1 = {
    testName: "API Test",
    endpoint: "/loandetails",
    method: "POST"
}

getProperty1(loginTest1, "testName")
getProperty1(loanTest1, "testName")
getProperty1(apiTest1, "testName")