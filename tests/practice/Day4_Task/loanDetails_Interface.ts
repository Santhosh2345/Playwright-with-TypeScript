// Restrict the allwoed values for loanStatus
type LoanStatus = "Approved" | "Pending" | "Rejected";

export interface LoanApplication  {
    applicationId: number,
    customerName: string
    loanAmount: number
    loanStatus: LoanStatus
    approvedBy?: string
}