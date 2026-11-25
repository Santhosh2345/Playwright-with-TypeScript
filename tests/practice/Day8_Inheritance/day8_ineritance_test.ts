class BaseTest{
    testName: string
    environment: string

    constructor(testName: string, environment: string){
        this.testName = testName;
        this.environment = environment;
    }

    displayTestDetails(): void{
        console.log(`Test ${this.testName} is ran in ${this.environment} environment`)
    }
}

class UITest extends BaseTest{
    browserName: string;

    constructor(testName: string, environment: string, browserName: string){
        super(testName, environment);
        this.browserName = browserName;
    }

    displayBrowserDetails(): void{
        console.log(`Executed in ${this.browserName} browser`)
    }
}

class APITest extends BaseTest{
    endpoint: string

    constructor(testName: string, environment: string, endpoint: string){
        super(testName, environment);
        this.endpoint = endpoint;
    }

    displayEndpointDetails(): void{
        console.log(`API endpoint: ${this.endpoint}`)
    }
}

const uiTest = new UITest("Login", "QA", "Chrome");
uiTest.displayTestDetails();
uiTest.displayBrowserDetails();

const apiTest = new APITest("Loan status update", "QA", "/loan-status")
apiTest.displayTestDetails();
apiTest.displayEndpointDetails();