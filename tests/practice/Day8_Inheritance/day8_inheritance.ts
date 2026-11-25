class Employee{
    protected readonly employeeId: number
    employeeName: string
    department: string

    constructor(employeeId: number, employeeName: string, department: string){
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.department = department;
    }

    displayEmployeeDetails(): void{
        console.log(`Employee ID: ${this.employeeId}`
            + ` user name is ${this.employeeName}`
            + ` and department is ${this.department}`)
    }
}

class AutomationTester extends Employee{
    automationTool: string;

    constructor(employeeId: number, employeeName: string, department: string, automationTool: string){
        super(employeeId, employeeName, department);
        this.automationTool = automationTool;
    }

    displayAutomationDetails(): void{
        console.log(`${this.employeeName} is using ${this.automationTool}`)
    }
}

const obj1 = new AutomationTester(101, "John", "Testing", "Playwright");
obj1.displayEmployeeDetails()
obj1.displayAutomationDetails()
const obj2 = new AutomationTester(102, "David", "Testing", "Selenium");
obj2.displayEmployeeDetails()
obj2.displayAutomationDetails()