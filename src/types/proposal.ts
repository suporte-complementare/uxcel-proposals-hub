export type ProposalStatus = "pending" | "approved" | "rejected";

export interface Proposal {
  id: string;
  clientName: string;
  sentDate: Date;
  value: number;
  status: ProposalStatus;
  lastFollowUp: Date;
  expectedReturnDate?: Date;
  notes: string;
}
