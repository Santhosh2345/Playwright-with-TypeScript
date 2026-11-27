function displayValue<T>(value: T): void{
    console.log(`The value is ${value}`)
}

displayValue<string>("String value");
displayValue<number>(123);
displayValue<boolean>(true);

function getFirstItem<T>(item: T[]): T{
    return item[0]
}

console.log(getFirstItem<string>(["Login_Test","Logout_Test"]))
console.log(getFirstItem<number>([1,2]))
console.log(getFirstItem<boolean>([true,false]))

interface TestResponse<T>{
    statusCode: number;
    data: T;
}

interface LoanDetails{
    loanNumber: string,
    state: string
}

interface EmployeeDetails{
    employeeName: string
}

const test: TestResponse<LoanDetails> = {
    statusCode: 200,
    data: {loanNumber: "EB124587",
        state: "TN"
    }
}
const test2: TestResponse<EmployeeDetails> = {
    statusCode: 200,
    data: {employeeName: "Santhosh"}
}

console.log(test)
console.log(test2)