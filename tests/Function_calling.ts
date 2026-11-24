function calculateTotalTests(passed: number, failed: number): number{
    return passed + failed
}

function calculatePassPercentage(passed: number, total: number): number{
    if(total <= 0){
        throw new Error("You total must be greater than zero")
    }
    return ((passed/total)*100)
}

function displayExecutionSummary(passed: number, failed: number){
    let totalTests = calculateTotalTests(passed, failed)
    console.log("Total Tests: ", totalTests)

    console.log("Passed Test: ", passed)
    console.log("Failed Tests: ", failed)

    let passPercentage = calculatePassPercentage(passed, totalTests)
    console.log(`Pass Percentage: ${passPercentage.toFixed(2)}%`)
}

displayExecutionSummary(80, 20)