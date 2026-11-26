//Creating type and it known value conditioning
type TestStatus = "Passed" | "Failed" | "Skipped";
type BrowserName = "Chrome" | "Firefox" | "Edge";

//Creating interface and implement the type
interface TestInfo{
    testName: string,
    testStatus: TestStatus,
    browser: BrowserName,
    executionTime?: number | string
}

//Creating type for interface
type detail = TestInfo;

//Declare the type for detail (TestInfo) as list
let details: detail[] = []

//Adding value to list
details.push(
    {
    testName: "Invoice",
    testStatus: "Passed",
    browser: "Chrome",
    executionTime: "110ms"
}, {
    testName: "Cart",
    testStatus: "Failed",
    browser: "Chrome"
}
)

//Loop the list
for(const item of details){
    console.log(item)
}

//Creating type for interface TestInfo
type one = TestInfo;
//Declare the type as dictionary(key, value)
let a: Record<string, one> = {}

//Adding value to a by creating key and mapping to it
a["TC_01"] = {
    testName: "Logout",
    testStatus: "Passed",
    browser: "Chrome",
    executionTime: "110ms"
}

//Looping the object a
for(const [tcId, value] of Object.entries(a)){
    console.log(`${tcId}: ${value.testName} -> ${value.testStatus}`);
}