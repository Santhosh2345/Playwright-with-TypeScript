import type { LoanApplication  } from "./loanDetails_Interface";

const loanDetails: LoanApplication [] = [{
    "applicationId": 101,
    "customerName": "John",
    "loanAmount": 500000,
    "loanStatus": "Approved",
    "approvedBy": "Manager"
},{
    "applicationId": 102,
    "customerName": "David",
    "loanAmount": 750000,
    "loanStatus": "Pending"
},{
    "applicationId": 103,
    "customerName": "Sarah",
    "loanAmount": 300000,
    "loanStatus": "Rejected"
}]

let totalLoanAmt: number = 0;
let approved: number = 0;
let pending: number = 0;
let rejected: number = 0;

for (const loanDetail of loanDetails) {

    console.log(loanDetail);

    totalLoanAmt += loanDetail.loanAmount;

    if (loanDetail.loanStatus.toLowerCase() === "approved"){
        approved ++;
    }else if (loanDetail.loanStatus.toLowerCase() === "pending"){
        pending ++;
    }else if (loanDetail.loanStatus.toLowerCase() === "rejected"){
        rejected ++
    }
}

console.log(`Total Loan Amount: ${totalLoanAmt}`);
console.log(`Approved Applications: ${approved}`)
console.log(`Pending Applications: ${pending}`)
console.log(`Rejected Applications: ${rejected}`)